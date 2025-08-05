import * as THREE from 'three';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type ViewMode = 'perspective' | 'orthographic';
export type ViewDirection = 'top' | 'front' | 'right';

export class CameraController {
  public viewMode: ViewMode = 'perspective';

  constructor(
    private perspectiveCamera: THREE.PerspectiveCamera,
    private orthographicCamera: THREE.OrthographicCamera,
    private controls: OrbitControls,
    private container: HTMLElement
  ) {}

  get currentCamera(): THREE.PerspectiveCamera | THREE.OrthographicCamera {
    return this.viewMode === 'perspective' ? this.perspectiveCamera : this.orthographicCamera;
  }

  public toggleViewMode(): ViewMode {
    this.viewMode = this.viewMode === 'perspective' ? 'orthographic' : 'perspective';
    this.controls.object = this.currentCamera;
    return this.viewMode;
  }

  public setView(direction: ViewDirection) {
    const distance = this.currentCamera.position.length();
    this.controls.target.set(0, 0, 0);
    this.currentCamera.up.set(0, 1, 0);

    switch (direction) {
      case 'top':
        this.currentCamera.position.set(0, distance, 0);
        this.currentCamera.up.set(0, 0, -1);
        break;
      case 'front':
        this.currentCamera.position.set(0, 0, distance);
        break;
      case 'right':
        this.currentCamera.position.set(distance, 0, 0);
        break;
    }
    this.controls.update();
  }

  public frameToObject(mesh: THREE.Mesh, resetPosition = true) {
    const boundingBox = new THREE.Box3().setFromObject(mesh);
    const center = boundingBox.getCenter(new THREE.Vector3());
    const size = boundingBox.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    // Center the model
    mesh.position.sub(center);

    // Camera fit logic
    const camDir = new THREE.Vector3();
    this.currentCamera.getWorldDirection(camDir);
    this.controls.target.set(0, 0, 0);

    let fitDist: number;
    if (this.viewMode === 'perspective') {
      const fov = this.perspectiveCamera.fov * (Math.PI / 180);
      fitDist = (maxDim / 2) / Math.tan(fov / 2) * 1.5;
    } else {
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const camHeight = maxDim * 1.2;
      const camWidth = camHeight * aspect;
      
      this.orthographicCamera.left = -camWidth / 2;
      this.orthographicCamera.right = camWidth / 2;
      this.orthographicCamera.top = camHeight / 2;
      this.orthographicCamera.bottom = -camHeight / 2;
      this.orthographicCamera.zoom = 1;
      this.orthographicCamera.updateProjectionMatrix();
      
      fitDist = maxDim * 1.5;
    }

    this.currentCamera.position.copy(camDir.multiplyScalar(-fitDist));
    this.currentCamera.lookAt(0, 0, 0);

    this.controls.object = this.currentCamera;
    this.controls.update();
  }
}
