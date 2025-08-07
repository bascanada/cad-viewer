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
  public modelHistory: THREE.Mesh[] = [];
  public historyIndex = -1;

  private gizmoScene: THREE.Scene;
  private gizmoCamera: THREE.PerspectiveCamera;

  private stlLoader = new STLLoader();
  private threeMFLoader = new ThreeMFLoader();
  private animationFrameId: number | null = null;
  private gridColor: string;
  private gridCenterLineColor: string;

  constructor(
    container: HTMLElement,
    backgroundColor: string,
    gridColor: string,
    gridCenterLineColor: string
  ) {
    this.gridColor = gridColor;
    this.gridCenterLineColor = gridCenterLineColor;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(backgroundColor);

    // Initialize cameras
    const aspect = container.clientWidth / container.clientHeight;
    this.perspectiveCamera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.orthographicCamera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
    this.currentCamera = this.perspectiveCamera;
    this.currentCamera.position.z = 10;

    // Setup scene elements
    this.setupGrid(this.gridColor, this.gridCenterLineColor);
    this.setupLighting();
    this.setupRenderer(container);
    this.setupControls();
    this.setupGizmo();
  }

  private setupGizmo() {
    this.gizmoScene = new THREE.Scene();
    this.gizmoCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 10);
    this.gizmoCamera.position.z = 2;

    const axesHelper = new THREE.AxesHelper(1);
    this.gizmoScene.add(axesHelper);
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

      // Render gizmo
      this.renderer.autoClear = false;
      this.renderer.clearDepth();
      this.gizmoCamera.position.copy(this.currentCamera.position);
      this.gizmoCamera.quaternion.copy(this.currentCamera.quaternion);
      this.renderer.setViewport(0, 0, 100, 100);
      this.renderer.render(this.gizmoScene, this.gizmoCamera);
      this.renderer.setViewport(0, 0, this.renderer.domElement.width, this.renderer.domElement.height);
      this.renderer.autoClear = true;
    };
    animate();
  }

  public updateBackgroundColor(color: string) {
    this.scene.background = new THREE.Color(color);
  }

  public updateGrid(gridColor: string, gridCenterLineColor: string, size = 100, divisions = 100) {
    this.gridColor = gridColor;
    this.gridCenterLineColor = gridCenterLineColor;
    this.scene.remove(this.gridHelper);
    this.gridHelper.dispose();
    this.gridHelper = new THREE.GridHelper(size, divisions, gridColor, gridCenterLineColor);
    this.scene.add(this.gridHelper);
  }

  public loadModel(payload: string, payloadType: 'stl' | '3mf', color: string): ModelInfo {
    this.clearCurrentModel();

    try {
      const meshes = this.parseModel(payload, payloadType, color);
      if (meshes.length > 0) {
        const newMesh = meshes[0];
        this.currentMesh = newMesh;

        // Add to history
        this.modelHistory = this.modelHistory.slice(0, this.historyIndex + 1);
        this.modelHistory.push(newMesh);
        this.historyIndex++;

        this.scene.add(newMesh);
        const modelInfo = this.calculateModelInfo(meshes);

        if (modelInfo.dimensions) {
          const { x, y, z } = modelInfo.dimensions;
          const maxSize = Math.max(parseFloat(x), parseFloat(y), parseFloat(z));
          const newSize = Math.ceil(maxSize / 10) * 20;
          this.updateGrid(this.gridColor, this.gridCenterLineColor, newSize, newSize / 10);
        }

        return modelInfo;
      }
    } catch (error) {
      console.error(`Failed to parse ${payloadType.toUpperCase()}:`, error);
    }

    return { triangleCount: 0, dimensions: null };
  }

  public undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.setActiveModelFromHistory();
    }
  }

  public redo() {
    if (this.historyIndex < this.modelHistory.length - 1) {
      this.historyIndex++;
      this.setActiveModelFromHistory();
    }
  }

  private setActiveModelFromHistory() {
    this.clearCurrentModel();
    this.currentMesh = this.modelHistory[this.historyIndex];
    this.scene.add(this.currentMesh);
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
      meshes.push(mesh);
    } else if (payloadType === '3mf') {
      const arrayBuffer = new TextEncoder().encode(payload).buffer;
      const object = this.threeMFLoader.parse(arrayBuffer);
      this.addMeshesRecursively(object, meshes, false);
    }

    return meshes;
  }

  private addMeshesRecursively(obj: any, meshes: THREE.Mesh[], addToScene: boolean) {
    if (obj.isMesh) {
      if (addToScene) {
        this.scene.add(obj);
      }
      meshes.push(obj);
    }
    if (obj.children && obj.children.length) {
      obj.children.forEach((child: any) => this.addMeshesRecursively(child, meshes, addToScene));
    }
  }

  public calculateModelInfo(meshes: THREE.Mesh[]): ModelInfo {
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

  public exportScreenshot(
    width: number,
    height: number,
    backgroundColor?: string
  ): Promise<string> {
    return new Promise((resolve) => {
      const originalBackgroundColor = this.scene.background;
      if (backgroundColor) {
        this.scene.background = new THREE.Color(backgroundColor);
      }

      this.renderer.setSize(width, height);
      this.renderer.render(this.scene, this.currentCamera);

      const dataURL = this.renderer.domElement.toDataURL('image/png');

      this.resize(this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight);
      if (backgroundColor) {
        this.scene.background = originalBackgroundColor;
      }

      resolve(dataURL);
    });
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
