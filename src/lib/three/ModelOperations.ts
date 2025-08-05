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
