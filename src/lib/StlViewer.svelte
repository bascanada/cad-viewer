<svelte:options customElement="stl-viewer" />

<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

  // --- Props ---
  export let stlPayload = '';
  export let color = '#fca503';
  export let viewerBackgroundColor = '#1e1e1e';
  export let gridColor = '#888888';
  export let gridCenterLineColor = '#444444';

  // --- Component State ---
  let container;
  let renderer, scene, controls, currentMesh, gridHelper;
  const loader = new STLLoader();
  let animationFrameId;
  let resizeObserver;

  // CAD features State
  let triangleCount = 0;
  let modelDimensions = null;

  let viewMode = 'perspective'; // 'perspective' ou 'orthographic'
  let camera; // La caméra active
  let perspectiveCamera, orthographicCamera;


  onMount(() => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(viewerBackgroundColor);
    
    // ✨ NOUVEAU: Initialiser les deux caméras
    const aspect = container.clientWidth / container.clientHeight;
    perspectiveCamera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    orthographicCamera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
    camera = perspectiveCamera; // Commencer en mode perspective
    camera.position.z = 10;

    // Grid and Axes
    gridHelper = new THREE.GridHelper(100, 100, gridColor, gridCenterLineColor);
    scene.add(gridHelper);
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    if (stlPayload) {
      updateModel(stlPayload, color);
    }

    const handleResize = () => {
      if (!renderer || !camera || !container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width === 0 || height === 0) return;

      renderer.setSize(width, height);

      const aspect = width / height;
      if (camera.isPerspectiveCamera) {
        camera.aspect = aspect;
      } else { // Orthographic
        const frustumHeight = camera.top - camera.bottom;
        camera.left = -frustumHeight * aspect / 2;
        camera.right = frustumHeight * aspect / 2;
      }
      camera.updateProjectionMatrix();
    };

    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
  });

  onDestroy(() => {
    if (resizeObserver) resizeObserver.disconnect();
    cancelAnimationFrame(animationFrameId);
    if (currentMesh) {
      scene.remove(currentMesh);
      currentMesh.geometry.dispose();
      currentMesh.material.dispose();
    }
    controls.dispose();
    renderer.dispose();
  });

  // ✨ NOUVEAU: Fonction de cadrage qui gère les deux types de caméra
  function frameCamera() {
    if (!currentMesh) return;

    const boundingBox = new THREE.Box3().setFromObject(currentMesh);
    const center = boundingBox.getCenter(new THREE.Vector3());
    const size = boundingBox.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);

    // Centrer le modèle
    currentMesh.position.sub(center);

    if (viewMode === 'perspective') {
      camera = perspectiveCamera;
      const fov = camera.fov * (Math.PI / 180);
      const cameraZ = (maxDim / 2) / Math.tan(fov / 2) * 1.5;
      camera.position.set(0, 0, cameraZ);
    } else { // Orthographic
      camera = orthographicCamera;
      const aspect = container.clientWidth / container.clientHeight;
      const camHeight = maxDim * 1.2;
      const camWidth = camHeight * aspect;

      camera.left = -camWidth / 2;
      camera.right = camWidth / 2;
      camera.top = camHeight / 2;
      camera.bottom = -camHeight / 2;
      camera.position.set(0, 0, maxDim * 1.5);
      camera.zoom = 1;
      camera.updateProjectionMatrix();
    }
    
    // Mettre à jour les OrbitControls avec la caméra active
    controls.object = camera;
    controls.target.set(0, 0, 0);
    controls.update();
  }

  function updateModel(payload, modelColor) {
    if (currentMesh) {
      scene.remove(currentMesh);
      currentMesh.geometry.dispose();
      currentMesh.material.dispose();
    }

    try {
      const geometry = loader.parse(payload);
      const material = new THREE.MeshStandardMaterial({
        color: modelColor,
        metalness: 0.1,
        roughness: 0.75,
      });
      currentMesh = new THREE.Mesh(geometry, material);
      scene.add(currentMesh);

      // Mettre à jour les infos
      const boundingBox = new THREE.Box3().setFromObject(currentMesh);
      const size = boundingBox.getSize(new THREE.Vector3());
      triangleCount = geometry.attributes.position.count / 3;
      modelDimensions = { x: size.x.toFixed(2), y: size.y.toFixed(2), z: size.z.toFixed(2) };
      
      // Cadrer la caméra
      frameCamera();
    } catch (error) {
      console.error("Failed to parse STL:", error);
    }
  }

  // --- Toolbar Functions ---
  function resetView() {
    frameCamera();
  }

  function toggleWireframe() {
    if (currentMesh) { currentMesh.material.wireframe = !currentMesh.material.wireframe; }
  }
  
  function toggleViewMode() {
    viewMode = (viewMode === 'perspective') ? 'orthographic' : 'perspective';
    resetView();
  }

  function setView(view) {
    const distance = camera.position.length();
    controls.target.set(0, 0, 0);
    camera.up.set(0, 1, 0);

    switch (view) {
      case 'top':
        camera.position.set(0, distance, 0);
        camera.up.set(0, 0, -1);
        break;
      case 'front':
        camera.position.set(0, 0, distance);
        break;
      case 'right':
        camera.position.set(distance, 0, 0);
        break;
    }
    controls.update();
  }

  $: if (scene && stlPayload) {
    updateModel(stlPayload, color);
  }

  $: if (scene) {
    scene.background = new THREE.Color(viewerBackgroundColor);
  }

  $: if (scene && gridHelper) {
    scene.remove(gridHelper);
    gridHelper.dispose();
    gridHelper = new THREE.GridHelper(100, 100, gridColor, gridCenterLineColor);
    scene.add(gridHelper);
  }
</script>

<style>
  .stl-viewer-host {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    /* --- Themeable Properties --- */
    --viewer-background-color: #1e1e1e;
    --toolbar-background-color: rgba(42, 42, 42, 0.8);
    --toolbar-button-background-color: #444;
    --toolbar-button-hover-background-color: #555;
    --toolbar-button-foreground-color: white;
    --toolbar-button-border-color: #666;
    --info-panel-background-color: rgba(42, 42, 42, 0.8);
    --info-panel-foreground-color: #eee;
    --info-panel-span-background-color: #444;
  }
  .toolbar {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;
    background-color: var(--toolbar-background-color);
    padding: 8px;
    border-radius: 4px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .toolbar button {
    background-color: var(--toolbar-button-background-color);
    color: var(--toolbar-button-foreground-color);
    border: 1px solid var(--toolbar-button-border-color);
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.9em;
  }
  .toolbar button:hover {
    background-color: var(--toolbar-button-hover-background-color);
  }
  .info-panel {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 10;
    background-color: var(--info-panel-background-color);
    color: var(--info-panel-foreground-color);
    padding: 8px 12px;
    border-radius: 4px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    font-size: 0.9em;
  }
  .info-panel span {
    background-color: var(--info-panel-span-background-color);
    padding: 4px 8px;
    border-radius: 4px;
  }
  .viewer-container {
    width: 100%;
    height: 100%;
    background-color: var(--viewer-background-color);
  }
</style>

<div class="stl-viewer-host">
  <div class="viewer-container" bind:this={container}></div>

  <div class="toolbar">
    <button on:click={resetView}>Reset View</button>
    <button on:click={toggleViewMode}>View: {viewMode}</button>
    <button on:click={toggleWireframe}>Toggle Wireframe</button>
    <button on:click={() => setView('top')}>Top</button>
    <button on:click={() => setView('front')}>Front</button>
    <button on:click={() => setView('right')}>Right</button>
  </div>

  {#if modelDimensions}
    <div class="info-panel">
      <strong>Model Info:</strong>
      <span>Triangles: {triangleCount.toLocaleString()}</span>
      <span>
        Dimensions (mm): {modelDimensions.x} x {modelDimensions.y} x {modelDimensions.z}
      </span>
    </div>
  {/if}
</div>
