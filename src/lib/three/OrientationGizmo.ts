import * as THREE from 'three';

export type ViewDirection = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom';

export interface OrientationGizmoOptions {
  size?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  margin?: number;
  axisLength?: number;
  interactive?: boolean;
  style?: 'arrows' | 'cube'; // New option for gizmo style
}

export class OrientationGizmo {
  private container: HTMLElement;
  private gizmoRenderer: THREE.WebGLRenderer;
  private gizmoScene: THREE.Scene;
  private gizmoCamera: THREE.OrthographicCamera;
  private mainCamera: THREE.Camera;
  private gizmoElement: HTMLElement;
  private axesGroup: THREE.Group;
  private options: Required<OrientationGizmoOptions>;
  
  // Callback for when axis is clicked
  public onAxisClick?: (direction: ViewDirection) => void;

  constructor(
    container: HTMLElement,
    camera: THREE.Camera,
    options: OrientationGizmoOptions = {}
  ) {
    this.container = container;
    this.mainCamera = camera;
    
    // Set default options
    this.options = {
      size: 240, // Doubled from 120 to 240
      position: 'bottom-right',
      margin: 20,
      axisLength: 120, // Doubled from 60 to 120 to make cube bigger
      interactive: true,
      style: 'arrows', // Default to arrow style
      ...options
    };

    this.setupGizmoRenderer();
    this.setupGizmoScene();
    this.setupGizmoCamera();
    
    if (this.options.style === 'cube') {
      this.createViewCube();
    } else {
      this.createAxes();
    }
    
    this.positionGizmo();
    
    if (this.options.interactive) {
      this.setupInteraction();
    }
  }

  private setupGizmoRenderer() {
    this.gizmoRenderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    this.gizmoRenderer.setSize(this.options.size, this.options.size);
    this.gizmoRenderer.setClearColor(0x000000, 0); // Transparent background
    
    // Create container element
    this.gizmoElement = document.createElement('div');
    this.gizmoElement.style.position = 'absolute';
    this.gizmoElement.style.width = `${this.options.size}px`;
    this.gizmoElement.style.height = `${this.options.size}px`;
    this.gizmoElement.style.pointerEvents = this.options.interactive ? 'auto' : 'none';
    this.gizmoElement.style.zIndex = '1000';
    this.gizmoElement.style.borderRadius = '8px';
    this.gizmoElement.style.background = 'rgba(42, 42, 42, 0.8)';
    this.gizmoElement.style.backdropFilter = 'blur(5px)';
    this.gizmoElement.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    
    this.gizmoElement.appendChild(this.gizmoRenderer.domElement);
    this.container.appendChild(this.gizmoElement);
  }

  private setupGizmoScene() {
    this.gizmoScene = new THREE.Scene();
    
    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.gizmoScene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    this.gizmoScene.add(directionalLight);
  }

  private setupGizmoCamera() {
    const size = this.options.axisLength * 1.1; // Adjusted to properly frame the larger cube
    this.gizmoCamera = new THREE.OrthographicCamera(
      -size, size, size, -size, 1, 1000
    );
    this.gizmoCamera.position.set(100, 100, 100);
    this.gizmoCamera.lookAt(0, 0, 0);
  }

  private createAxes() {
    this.axesGroup = new THREE.Group();
    
    const axisLength = this.options.axisLength;
    const coneHeight = axisLength * 0.25; // Smaller cone proportion 
    const coneRadius = axisLength * 0.15; // Wide cone
    const lineRadius = axisLength * 0.08; // Much thicker shaft - most visible part
    
    // Create materials
    const materials = {
      x: new THREE.MeshLambertMaterial({ color: 0xff3333 }), // Red
      y: new THREE.MeshLambertMaterial({ color: 0x33ff33 }), // Green  
      z: new THREE.MeshLambertMaterial({ color: 0x3333ff })  // Blue
    };
    
    // Invisible material for larger hit areas
    const invisibleMaterial = new THREE.MeshBasicMaterial({ 
      transparent: true, 
      opacity: 0,
      side: THREE.DoubleSide 
    });
    
    // Create axis arrows
    Object.entries(materials).forEach(([axis, material]) => {
      const group = new THREE.Group();
      group.userData = { axis };
      
      // Create cylinder (shaft) - visible
      const cylinderGeometry = new THREE.CylinderGeometry(
        lineRadius, lineRadius, axisLength - coneHeight, 8
      );
      const cylinder = new THREE.Mesh(cylinderGeometry, material);
      
      // Create cone (arrowhead) - visible
      const coneGeometry = new THREE.ConeGeometry(coneRadius, coneHeight, 8);
      const cone = new THREE.Mesh(coneGeometry, material);
      cone.position.y = (axisLength - coneHeight) / 2 + coneHeight / 2; // Position at end of shaft
      
      // Position cylinder
      cylinder.position.y = (axisLength - coneHeight) / 2;
      
      // Create larger invisible hit area for easier clicking
      const hitAreaGeometry = new THREE.CylinderGeometry(
        lineRadius * 5, // Even wider hit area
        coneRadius * 2.5, // Wider at the tip
        axisLength, 
        8
      );
      const hitArea = new THREE.Mesh(hitAreaGeometry, invisibleMaterial);
      hitArea.userData = { axis, isHitArea: true };
      
      group.add(cylinder);
      group.add(cone);
      group.add(hitArea);
      
      // Orient axes
      if (axis === 'x') {
        group.rotation.z = -Math.PI / 2;
      } else if (axis === 'z') {
        group.rotation.x = Math.PI / 2;
      }
      // Y axis is already vertical (default)
      
      this.axesGroup.add(group);
    });
    
    // Add center sphere - bigger and more clickable
    const sphereGeometry = new THREE.SphereGeometry(lineRadius * 2, 12, 12); // More proportional to thick shafts
    const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
    // Add invisible larger hit area for center sphere
    const sphereHitGeometry = new THREE.SphereGeometry(lineRadius * 4, 8, 8);
    const sphereHitArea = new THREE.Mesh(sphereHitGeometry, invisibleMaterial);
    sphereHitArea.userData = { axis: 'center', isHitArea: true };
    
    this.axesGroup.add(sphere);
    this.axesGroup.add(sphereHitArea);
    
    this.gizmoScene.add(this.axesGroup);
  }

  private createViewCube() {
    this.axesGroup = new THREE.Group();
    
    const cubeSize = this.options.axisLength * 1.0; // Increased from 0.8 to 1.0 to make cube bigger
    const bevelSize = cubeSize * 0.15; // Size of beveled corners/edges
    
    // Create a beveled cube geometry similar to FreeCAD's navigation cube
    this.createBeveledCube(cubeSize, bevelSize);
    
    this.gizmoScene.add(this.axesGroup);
  }

  private createBeveledCube(size: number, bevelSize: number) {
    // Create the main cube faces (6 faces)
    this.createMainFaces(size, bevelSize);
    
    // Create edge faces (12 edges, but beveled so they become faces)
    this.createEdgeFaces(size, bevelSize);
    
    // Create corner faces (8 corners, but beveled so they become faces)
    this.createCornerFaces(size, bevelSize);
  }

  private createMainFaces(size: number, bevelSize: number) {
    const faceSize = size - 2 * bevelSize;
    const geometry = new THREE.PlaneGeometry(faceSize, faceSize);
    
    const faces = [
      { name: 'front', color: 0x3333ff, pos: [0, 0, size/2], rot: [0, 0, 0], label: 'FRONT' },
      { name: 'back', color: 0x6666ff, pos: [0, 0, -size/2], rot: [0, Math.PI, 0], label: 'BACK' },
      { name: 'right', color: 0xff3333, pos: [size/2, 0, 0], rot: [0, Math.PI/2, 0], label: 'RIGHT' },
      { name: 'left', color: 0xff6666, pos: [-size/2, 0, 0], rot: [0, -Math.PI/2, 0], label: 'LEFT' },
      { name: 'top', color: 0x33ff33, pos: [0, size/2, 0], rot: [-Math.PI/2, 0, 0], label: 'TOP' },
      { name: 'bottom', color: 0x66ff66, pos: [0, -size/2, 0], rot: [Math.PI/2, 0, 0], label: 'BOTTOM' }
    ];

    faces.forEach(face => {
      const material = this.createFaceMaterial(face.label, face.color);
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(face.pos[0], face.pos[1], face.pos[2]);
      mesh.rotation.set(face.rot[0], face.rot[1], face.rot[2]);
      
      mesh.userData = { 
        type: 'face',
        face: face.name 
      };
      
      this.axesGroup.add(mesh);
    });
  }

  private createEdgeFaces(size: number, bevelSize: number) {
    const s = size / 2;
    const l = s - bevelSize;
    const material = new THREE.MeshLambertMaterial({ color: 0x888888, side: THREE.DoubleSide });

    const edges = [
        // Top & Bottom edges parallel to X-axis
        { name: 'top-front', v: [[-l, l, s], [l, l, s], [l, s, l], [-l, s, l]] },
        { name: 'top-back', v: [[-l, s, -l], [l, s, -l], [l, l, -s], [-l, l, -s]] },
        { name: 'bottom-front', v: [[-l, -s, l], [l, -s, l], [l, -l, s], [-l, -l, s]] },
        { name: 'bottom-back', v: [[-l, -l, -s], [l, -l, -s], [l, -s, -l], [-l, -s, -l]] },

        // Top & Bottom edges parallel to Z-axis
        { name: 'top-right', v: [[s, l, -l], [s, l, l], [l, s, l], [l, s, -l]] },
        { name: 'top-left', v: [[-l, s, -l], [-l, s, l], [-s, l, l], [-s, l, -l]] },
        { name: 'bottom-right', v: [[s, -l, l], [s, -l, -l], [l, -s, -l], [l, -s, l]] },
        { name: 'bottom-left', v: [[-s, -l, l], [-s, -l, -l], [-l, -s, -l], [-l, -s, l]] },

        // Vertical edges
        { name: 'front-right', v: [[s, -l, l], [s, l, l], [l, l, s], [l, -l, s]] },
        { name: 'front-left', v: [[-l, -l, s], [-l, l, s], [-s, l, l], [-s, -l, l]] },
        { name: 'back-right', v: [[s, l, -l], [s, -l, -l], [l, -l, -s], [l, l, -s]] },
        { name: 'back-left', v: [[-s, l, -l], [-s, -l, -l], [-l, -l, -s], [-l, l, -s]] },
    ];

    edges.forEach(edge => {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(edge.v.flat());
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setIndex([0, 1, 2, 0, 2, 3]);
        geometry.computeVertexNormals();
        const mesh = new THREE.Mesh(geometry, material.clone());
        mesh.userData = { type: 'edge', edge: edge.name };
        this.axesGroup.add(mesh);
    });
  }

  private createCornerFaces(size: number, bevelSize: number) {
    const s = size / 2;
    const l = s - bevelSize;
    const material = new THREE.MeshLambertMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });

    const corners = [
        { name: 'top-right-front', v: [[s,l,l], [l,s,l], [l,l,s]] },
        { name: 'top-left-front', v: [[-s,l,l], [-l,s,l], [-l,l,s]] },
        { name: 'top-right-back', v: [[s,l,-l], [l,s,-l], [l,l,-s]] },
        { name: 'top-left-back', v: [[-s,l,-l], [-l,s,-l], [-l,l,-s]] },
        { name: 'bottom-right-front', v: [[s,-l,l], [l,-s,l], [l,-l,s]] },
        { name: 'bottom-left-front', v: [[-s,-l,l], [-l,-s,l], [-l,-l,s]] },
        { name: 'bottom-right-back', v: [[s,-l,-l], [l,-s,-l], [l,-l,-s]] },
        { name: 'bottom-left-back', v: [[-s,-l,-l], [-l,-s,-l], [-l,-l,-s]] },
    ];

    corners.forEach(corner => {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            corner.v[0][0], corner.v[0][1], corner.v[0][2],
            corner.v[1][0], corner.v[1][1], corner.v[1][2],
            corner.v[2][0], corner.v[2][1], corner.v[2][2],
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.computeVertexNormals();
        const mesh = new THREE.Mesh(geometry, material.clone());
        mesh.userData = { type: 'corner', corner: corner.name };
        this.axesGroup.add(mesh);
    });
  }

  private createFaceMaterial(label: string, color: number): THREE.MeshLambertMaterial {
    // Create a canvas to draw the label
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d')!;
    
    // Fill background
    context.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
    context.fillRect(0, 0, 128, 128);
    
    // Add border
    context.strokeStyle = '#ffffff';
    context.lineWidth = 4;
    context.strokeRect(2, 2, 124, 124);
    
    // Add text
    context.fillStyle = '#ffffff';
    context.font = 'bold 14px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(label, 64, 64);
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    
    return new THREE.MeshLambertMaterial({ 
      map: texture,
      transparent: false 
    });
  }

  private positionGizmo() {
    const { position, margin } = this.options;
    
    switch (position) {
      case 'top-left':
        this.gizmoElement.style.top = `${margin}px`;
        this.gizmoElement.style.left = `${margin}px`;
        break;
      case 'top-right':
        this.gizmoElement.style.top = `${margin}px`;
        this.gizmoElement.style.right = `${margin}px`;
        break;
      case 'bottom-left':
        this.gizmoElement.style.bottom = `${margin}px`;
        this.gizmoElement.style.left = `${margin}px`;
        break;
      case 'bottom-right':
        this.gizmoElement.style.bottom = `${margin}px`;
        this.gizmoElement.style.right = `${margin}px`;
        break;
    }
  }

  private setupInteraction() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    this.gizmoElement.addEventListener('click', (event) => {
      if (!this.onAxisClick) return;
      
      const rect = this.gizmoElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, this.gizmoCamera);
      const intersects = raycaster.intersectObjects(this.axesGroup.children, true);
      
      if (intersects.length > 0) {
        let target = null;
        
        // Look for hit areas first (they're invisible but larger)
        for (const intersect of intersects) {
          const object = intersect.object;
          if (object.userData?.isHitArea) {
            target = object.userData;
            break;
          }
        }
        
        // If no hit area found, look for visible objects
        if (!target) {
          for (const intersect of intersects) {
            const clickedObject = intersect.object;
            if (clickedObject.userData?.type) {
              target = clickedObject.userData;
              break;
            }
            
            // For arrow style, look at parent
            if (this.options.style === 'arrows') {
              let parent = clickedObject.parent;
              while (parent && !target) {
                if (parent.userData?.axis) {
                  target = { axis: parent.userData.axis };
                  break;
                }
                parent = parent.parent;
              }
            }
          }
        }
        
        if (target) {
          // Handle different interaction types
          if (this.options.style === 'cube') {
            this.handleCubeInteraction(target);
          } else if (target.axis && target.axis !== 'center') {
            // Arrow style interaction
            this.flashAxis(target.axis);
            const direction = this.getViewDirectionFromAxis(target.axis);
            this.onAxisClick(direction);
          }
        }
      }
    });
    
    // Add hover effect for the entire gizmo
    this.gizmoElement.addEventListener('mouseenter', () => {
      this.gizmoElement.style.background = 'rgba(52, 52, 52, 0.9)';
      this.gizmoElement.style.cursor = 'pointer';
    });
    
    this.gizmoElement.addEventListener('mouseleave', () => {
      this.gizmoElement.style.background = 'rgba(42, 42, 42, 0.8)';
      this.gizmoElement.style.cursor = 'default';
    });
  }

  private handleCubeInteraction(target: any) {
    if (!this.onAxisClick) return;
    
    let direction: ViewDirection;
    
    switch (target.type) {
      case 'face':
        direction = this.getFaceDirection(target.face);
        break;
      case 'edge':
        direction = this.getEdgeDirection(target.edge);
        break;
      case 'corner':
        direction = this.getCornerDirection(target.corner);
        break;
      default:
        return;
    }
    
    this.onAxisClick(direction);
  }

  private getFaceDirection(face: string): ViewDirection {
    switch (face) {
      case 'front': return 'front';
      case 'back': return 'back';
      case 'left': return 'left';
      case 'right': return 'right';
      case 'top': return 'top';
      case 'bottom': return 'bottom';
      default: return 'front';
    }
  }

  private getEdgeDirection(edge: string): ViewDirection {
    // For edges, choose the dominant direction or create diagonal views
    // For now, let's map to the closest orthogonal view
    if (edge.includes('front') && edge.includes('top')) return 'front';
    if (edge.includes('front') && edge.includes('bottom')) return 'front';
    if (edge.includes('back') && edge.includes('top')) return 'back';
    if (edge.includes('back') && edge.includes('bottom')) return 'back';
    if (edge.includes('right') && edge.includes('top')) return 'right';
    if (edge.includes('right') && edge.includes('bottom')) return 'right';
    if (edge.includes('left') && edge.includes('top')) return 'left';
    if (edge.includes('left') && edge.includes('bottom')) return 'left';
    
    // Vertical edges - choose the face direction
    if (edge.includes('front')) return 'front';
    if (edge.includes('back')) return 'back';
    if (edge.includes('left')) return 'left';
    if (edge.includes('right')) return 'right';
    
    return 'front';
  }

  private getCornerDirection(corner: string): ViewDirection {
    // For corners, provide isometric-like views by choosing the most prominent direction
    if (corner.includes('front') && corner.includes('right')) return 'front';
    if (corner.includes('front') && corner.includes('left')) return 'front';
    if (corner.includes('back') && corner.includes('right')) return 'back';
    if (corner.includes('back') && corner.includes('left')) return 'back';
    
    // Default fallback
    return 'front';
  }

  private flashAxis(axis: string) {
    // Find the axis group and briefly highlight it
    this.axesGroup.children.forEach(child => {
      if (child.userData?.axis === axis) {
        const group = child as THREE.Group;
        group.children.forEach(mesh => {
          if (mesh instanceof THREE.Mesh && !mesh.userData?.isHitArea) {
            const originalMaterial = mesh.material as THREE.MeshLambertMaterial;
            const flashMaterial = originalMaterial.clone();
            flashMaterial.emissive.setHex(0x444444);
            
            mesh.material = flashMaterial;
            
            // Restore original material after a short delay
            setTimeout(() => {
              mesh.material = originalMaterial;
              flashMaterial.dispose();
            }, 150);
          }
        });
      }
    });
  }

  private getViewDirectionFromAxis(axis: string): ViewDirection {
    // Simple mapping - could be enhanced based on current camera position
    switch (axis) {
      case 'x': return 'right';
      case 'y': return 'top';
      case 'z': return 'front';
      default: return 'front';
    }
  }

  public update() {
    if (!this.mainCamera) return;
    
    // Get the main camera's rotation
    const cameraDirection = new THREE.Vector3();
    this.mainCamera.getWorldDirection(cameraDirection);
    
    // Position the gizmo camera to mirror the main camera's viewing direction
    // but always looking at the center from a fixed distance
    const distance = 100;
    this.gizmoCamera.position.copy(cameraDirection.clone().multiplyScalar(-distance));
    this.gizmoCamera.lookAt(0, 0, 0);
    
    // Also copy the up vector to maintain the same roll
    this.gizmoCamera.up.copy(this.mainCamera.up);
    this.gizmoCamera.updateProjectionMatrix();
    
    // Render the gizmo
    this.gizmoRenderer.render(this.gizmoScene, this.gizmoCamera);
  }

  public updateMainCamera(camera: THREE.Camera) {
    this.mainCamera = camera;
  }

  public dispose() {
    this.gizmoRenderer.dispose();
    if (this.gizmoElement.parentNode) {
      this.gizmoElement.parentNode.removeChild(this.gizmoElement);
    }
  }

  public setVisible(visible: boolean) {
    this.gizmoElement.style.display = visible ? 'block' : 'none';
  }
}
