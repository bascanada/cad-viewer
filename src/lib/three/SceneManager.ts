import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OrientationGizmo, type ViewDirection } from './OrientationGizmo.js';

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
  private gridSize = 100;
  private gridDivisions = 100;
  private orientationGizmo: OrientationGizmo | null = null;
  private gizmoScale: number = 1.0; // Store the gizmo scale multiplier

  private stlLoader = new STLLoader();
  private threeMFLoader = new ThreeMFLoader();
  private animationFrameId: number | null = null;

  constructor(
    container: HTMLElement,
    backgroundColor: string,
    gridColor: string,
    gridCenterLineColor: string,
    gizmoScale: number = 1.0
  ) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(backgroundColor);
    this.gizmoScale = gizmoScale; // Store the gizmo scale

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
    this.setupOrientationGizmo(container);
  }

  private setupGrid(gridColor: string, gridCenterLineColor: string) {
    this.gridHelper = new THREE.GridHelper(this.gridSize, this.gridDivisions, gridColor, gridCenterLineColor);
    this.scene.add(this.gridHelper);
  }

  private setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    this.scene.add(directionalLight);
  }

  private setupRenderer(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);
  }

  private setupControls() {
    this.controls = new OrbitControls(this.currentCamera, this.renderer.domElement);
    this.controls.enableDamping = true;
  }

  private setupOrientationGizmo(container: HTMLElement) {
    const baseSize = 240; // Base size in pixels
    const scaledSize = Math.round(baseSize * this.gizmoScale);
    
    this.orientationGizmo = new OrientationGizmo(container, this.currentCamera, {
      position: 'bottom-right',
      size: scaledSize, // Apply scale multiplier to the base size
      margin: 20
    });
    
    // Handle axis clicks to change view
    this.orientationGizmo.onAxisClick = (direction: THREE.Vector3) => {
      const currentMesh = this.currentMesh;
      if (!currentMesh) return;

      if (!currentMesh.geometry.boundingSphere) {
        currentMesh.geometry.computeBoundingSphere();
      }

      const distance = currentMesh.geometry.boundingSphere!.radius * 2;
      const position = direction.multiplyScalar(distance);

      const box = new THREE.Box3().setFromObject(currentMesh);
      const center = box.getCenter(new THREE.Vector3());

      this.currentCamera.position.copy(center.clone().add(position));
      this.currentCamera.lookAt(center);
      this.controls.target.copy(center);
      this.controls.update();
    };
  }

  private setViewDirection(direction: ViewDirection) {
    if (!this.currentMesh) return;
    
    const distance = 50; // Distance from object
    const position = new THREE.Vector3();
    
    switch (direction) {
      case 'front':
        position.set(0, 0, distance);
        break;
      case 'back':
        position.set(0, 0, -distance);
        break;
      case 'right':
        position.set(distance, 0, 0);
        break;
      case 'left':
        position.set(-distance, 0, 0);
        break;
      case 'top':
        position.set(0, distance, 0);
        break;
      case 'bottom':
        position.set(0, -distance, 0);
        break;
    }
    
    // Get the center of the current mesh
    const box = new THREE.Box3().setFromObject(this.currentMesh);
    const center = box.getCenter(new THREE.Vector3());
    
    // Set camera position relative to model center
    this.currentCamera.position.copy(center.clone().add(position));
    this.currentCamera.lookAt(center);
    this.controls.target.copy(center);
    this.controls.update();
  }

  public startAnimation() {
    const animate = () => {
      this.animationFrameId = requestAnimationFrame(animate);
      this.controls.update();
      this.renderer.render(this.scene, this.currentCamera);
      
      // Update orientation gizmo
      if (this.orientationGizmo) {
        this.orientationGizmo.update();
      }
    };
    animate();
  }

  public updateBackgroundColor(color: string) {
    this.scene.background = new THREE.Color(color);
  }

  public updateCurrentCamera(camera: THREE.PerspectiveCamera | THREE.OrthographicCamera) {
    this.currentCamera = camera;
    
    // Update orientation gizmo to use new camera
    if (this.orientationGizmo) {
      this.orientationGizmo.updateMainCamera(camera);
    }
  }

  public updateGizmoScale(scale: number) {
    if (scale <= 0) return; // Prevent invalid scales
    
    this.gizmoScale = scale;
    
    // Recreate the gizmo with the new scale
    if (this.orientationGizmo) {
      this.orientationGizmo.dispose();
      this.orientationGizmo = null;
      
      // Find the container element (parent of the renderer canvas)
      const container = this.renderer.domElement.parentElement;
      if (container) {
        this.setupOrientationGizmo(container);
      }
    }
  }

  public updateGrid(gridColor: string, gridCenterLineColor: string) {
    this.gridHelper.material.dispose();
    this.scene.remove(this.gridHelper);
    this.gridHelper = new THREE.GridHelper(
      this.gridSize,
      this.gridDivisions,
      gridColor,
      gridCenterLineColor
    );
    this.scene.add(this.gridHelper);
  }

  public updateGridSize(size: number) {
    this.gridSize = Math.max(size * 1.25, 20);
    this.scene.remove(this.gridHelper);
    this.gridHelper.dispose();

    this.gridHelper = new THREE.GridHelper(
      this.gridSize,
      this.gridDivisions,
      this.gridHelper.material.color,
      this.gridHelper.material.color
    );
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
    const maxSize = Math.max(size.x, size.y, size.z);
    this.updateGridSize(maxSize);
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

  public exportScreenshot() {
    this.renderer.render(this.scene, this.currentCamera);
    const dataURL = this.renderer.domElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'screenshot.png';
    link.click();
  }

  public dispose() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.clearCurrentModel();
    this.controls.dispose();
    this.renderer.dispose();
    
    // Dispose orientation gizmo
    if (this.orientationGizmo) {
      this.orientationGizmo.dispose();
      this.orientationGizmo = null;
    }
  }
}
