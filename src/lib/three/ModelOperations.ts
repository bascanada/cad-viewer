import * as THREE from 'three';

export class ModelOperations {
  public static toggleWireframe(mesh: THREE.Mesh | null) {
    if (!mesh) return;

    if (Array.isArray(mesh.material)) {
      mesh.material.forEach(m => {
        if ('wireframe' in m) {
          m.wireframe = !m.wireframe;
        }
      });
    } else {
      if ('wireframe' in mesh.material) {
        mesh.material.wireframe = !mesh.material.wireframe;
      }
    }
  }

  public static getWireframeState(mesh: THREE.Mesh | null): boolean {
    if (!mesh) return false;

    if (Array.isArray(mesh.material)) {
      return mesh.material.some(m => 'wireframe' in m && (m as any).wireframe);
    } else {
      return 'wireframe' in mesh.material ? (mesh.material as any).wireframe : false;
    }
  }

  public static setWireframeState(mesh: THREE.Mesh | null, wireframe: boolean) {
    if (!mesh) return;

    if (Array.isArray(mesh.material)) {
      mesh.material.forEach(m => {
        if ('wireframe' in m) {
          m.wireframe = wireframe;
        }
      });
    } else {
      if ('wireframe' in mesh.material) {
        mesh.material.wireframe = wireframe;
      }
    }
  }

  public static updateMeshColor(mesh: THREE.Mesh | null, color: string) {
    if (!mesh) return;

    if (Array.isArray(mesh.material)) {
      mesh.material.forEach(m => {
        if ('color' in m && m.color instanceof THREE.Color) {
          m.color.set(color);
        }
      });
    } else {
      if ('color' in mesh.material && mesh.material.color instanceof THREE.Color) {
        mesh.material.color.set(color);
      }
    }
  }
}
