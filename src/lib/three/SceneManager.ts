import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface ModelInfo {
  triangleCount: number;
  dimensions: { x: string; y: string; z: string } | null;
}

export class SceneManager {
  public scene: THREE.Scene;
  public renderer!: THREE.WebGLRenderer;
  public controls!: OrbitControls;
  public perspectiveCamera: THREE.PerspectiveCamera;
  public orthographicCamera: THREE.OrthographicCamera;
  public currentCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  public currentMesh: THREE.Mesh | null = null;
  public gridHelper!: THREE.GridHelper;

  private stlLoader = new STLLoader();
  private threeMFLoader = new ThreeMFLoader();
  private animationFrameId: number | null = null;

  constructor(
    container: HTMLElement,
    backgroundColor: string,
    gridColor: string,
    gridCenterLineColor: string
  ) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(backgroundColor);

    // Initialize cameras
    const aspect = container.clientWidth / container.clientHeight;
    this.perspectiveCamera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.orthographicCamera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
    this.currentCamera = this.perspectiveCamera;
    this.currentCamera.position.z = 10;

    // Setup scene elements
    this.setupGrid(gridColor, gridCenterLineColor);
    this.setupLighting();
    this.setupRenderer(container);
    this.setupControls();
  }

  private setupGrid(gridColor: string, gridCenterLineColor: string) {
    this.gridHelper = new THREE.GridHelper(100, 100, gridColor, gridCenterLineColor);
    this.scene.add(this.gridHelper);
    
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);
  }

  private setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    this.scene.add(directionalLight);
  }

  private setupRenderer(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);
  }

  private setupControls() {
    this.controls = new OrbitControls(this.currentCamera, this.renderer.domElement);
    this.controls.enableDamping = true;
  }

  public startAnimation() {
    const animate = () => {
      this.animationFrameId = requestAnimationFrame(animate);
      this.controls.update();
      this.renderer.render(this.scene, this.currentCamera);
    };
    animate();
  }

  public updateBackgroundColor(color: string) {
    this.scene.background = new THREE.Color(color);
  }

  public updateGrid(gridColor: string, gridCenterLineColor: string) {
    this.scene.remove(this.gridHelper);
    this.gridHelper.dispose();
    this.gridHelper = new THREE.GridHelper(100, 100, gridColor, gridCenterLineColor);
    this.scene.add(this.gridHelper);
  }

  public loadModel(payload: string, payloadType: 'stl' | '3mf', color: string): ModelInfo {
    this.clearCurrentModel();

    try {
      const meshes = this.parseModel(payload, payloadType, color);
      if (meshes.length > 0) {
        this.currentMesh = meshes[0];
        return this.calculateModelInfo(meshes);
      }
    } catch (error) {
      console.error(`Failed to parse ${payloadType.toUpperCase()}:`, error);
    }

    return { triangleCount: 0, dimensions: null };
  }

  private parseModel(payload: string, payloadType: string, color: string): THREE.Mesh[] {
    const meshes: THREE.Mesh[] = [];

    if (payloadType === 'stl') {
      const geometry = this.stlLoader.parse(payload);
      const material = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.1,
        roughness: 0.75,
      });
      const mesh = new THREE.Mesh(geometry, material);
      this.scene.add(mesh);
      meshes.push(mesh);
    } else if (payloadType === '3mf') {
      const arrayBuffer = new TextEncoder().encode(payload).buffer;
      const object = this.threeMFLoader.parse(arrayBuffer);
      this.addMeshesRecursively(object, meshes);
    }

    return meshes;
  }

  private addMeshesRecursively(obj: any, meshes: THREE.Mesh[]) {
    if (obj.isMesh) {
      this.scene.add(obj);
      meshes.push(obj);
    }
    if (obj.children && obj.children.length) {
      obj.children.forEach((child: any) => this.addMeshesRecursively(child, meshes));
    }
  }

  private calculateModelInfo(meshes: THREE.Mesh[]): ModelInfo {
    if (!this.currentMesh) return { triangleCount: 0, dimensions: null };

    const boundingBox = new THREE.Box3().setFromObject(this.currentMesh);
    const size = boundingBox.getSize(new THREE.Vector3());
    const triangleCount = meshes.reduce(
      (sum, m) => sum + (m.geometry.attributes.position.count / 3), 
      0
    );

    return {
      triangleCount,
      dimensions: {
        x: size.x.toFixed(2),
        y: size.y.toFixed(2),
        z: size.z.toFixed(2)
      }
    };
  }

  private clearCurrentModel() {
    if (this.currentMesh) {
      this.scene.remove(this.currentMesh);
      this.currentMesh.geometry.dispose();
      if (Array.isArray(this.currentMesh.material)) {
        this.currentMesh.material.forEach(m => m.dispose());
      } else {
        this.currentMesh.material.dispose();
      }
      this.currentMesh = null;
    }
  }

  public resize(width: number, height: number) {
    if (width === 0 || height === 0) return;

    this.renderer.setSize(width, height);
    const aspect = width / height;

    if ('isPerspectiveCamera' in this.currentCamera && this.currentCamera.isPerspectiveCamera) {
      (this.currentCamera as THREE.PerspectiveCamera).aspect = aspect;
    } else {
      const frustumHeight = (this.currentCamera as THREE.OrthographicCamera).top - 
                           (this.currentCamera as THREE.OrthographicCamera).bottom;
      const orthoCamera = this.currentCamera as THREE.OrthographicCamera;
      orthoCamera.left = -frustumHeight * aspect / 2;
      orthoCamera.right = frustumHeight * aspect / 2;
    }
    
    this.currentCamera.updateProjectionMatrix();
  }

  public dispose() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.clearCurrentModel();
    this.controls.dispose();
    this.renderer.dispose();
  }
}
