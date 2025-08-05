<svelte:options customElement="cad-viewer" />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { SceneManager, CameraController, ModelOperations, type ModelInfo, type ViewMode, type ViewDirection } from './three/index.js';
  import Toolbar from './components/Toolbar.svelte';
  import InfoPanel from './components/InfoPanel.svelte';

  // --- Props ---
  export let payload: string = '';
  export let payloadType: 'stl' | '3mf' = 'stl';
  export let color = '#fca503';
  export let viewerBackgroundColor = '#1e1e1e';
  export let gridColor = '#888888';
  export let gridCenterLineColor = '#444444';

  // --- Themeable properties ---
  export let toolbarBackgroundColor = 'rgba(42, 42, 42, 0.8)';
  export let toolbarButtonBackgroundColor = '#444';
  export let toolbarButtonHoverBackgroundColor = '#555';
  export let toolbarButtonForegroundColor = 'white';
  export let toolbarButtonBorderColor = '#666';
  export let infoPanelBackgroundColor = 'rgba(42, 42, 42, 0.8)';
  export let infoPanelForegroundColor = '#eee';
  export let infoPanelSpanBackgroundColor = '#444';

  // --- Component State ---
  let container: HTMLElement;
  let sceneManager: SceneManager;
  let cameraController: CameraController;
  let resizeObserver: ResizeObserver;
  let modelInfo: ModelInfo = { triangleCount: 0, dimensions: null };
  let viewMode: ViewMode = 'perspective';

  onMount(() => {
    initializeViewer();
    setupResizeObserver();
    
    if (payload) {
      loadModel();
    }
  });

  onDestroy(() => {
    cleanup();
  });

  function initializeViewer() {
    sceneManager = new SceneManager(container, viewerBackgroundColor, gridColor, gridCenterLineColor);
    cameraController = new CameraController(
      sceneManager.perspectiveCamera,
      sceneManager.orthographicCamera,
      sceneManager.controls,
      container
    );
    sceneManager.currentCamera = cameraController.currentCamera;
    sceneManager.startAnimation();
  }

  function setupResizeObserver() {
    const handleResize = () => {
      if (!container) return;
      const { clientWidth: width, clientHeight: height } = container;
      sceneManager.resize(width, height);
    };

    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
  }

  function loadModel() {
    modelInfo = sceneManager.loadModel(payload, payloadType, color);
    if (sceneManager.currentMesh) {
      cameraController.frameToObject(sceneManager.currentMesh, false);
    }
  }

  function cleanup() {
    resizeObserver?.disconnect();
    sceneManager?.dispose();
  }

  // --- Toolbar Handlers ---
  function handleResetView() {
    if (sceneManager.currentMesh) {
      cameraController.frameToObject(sceneManager.currentMesh);
    }
  }

  function handleToggleViewMode() {
    viewMode = cameraController.toggleViewMode();
    sceneManager.currentCamera = cameraController.currentCamera;
    sceneManager.controls.object = sceneManager.currentCamera;
    handleResetView();
  }

  function handleToggleWireframe() {
    ModelOperations.toggleWireframe(sceneManager.currentMesh);
  }

  function handleSetView(view: ViewDirection) {
    cameraController.setView(view);
  }

  // --- Reactive Statements ---
  $: if (sceneManager && payload) {
    loadModel();
  }

  $: if (sceneManager && container) {
    const computedStyle = getComputedStyle(container);
    sceneManager.updateBackgroundColor(computedStyle.backgroundColor);
  }

  $: if (sceneManager) {
    sceneManager.updateGrid(gridColor, gridCenterLineColor);
  }

  $: if (sceneManager?.currentMesh) {
    ModelOperations.updateMeshColor(sceneManager.currentMesh, color);
  }
</script>

<style>
  .stl-viewer-host {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  .viewer-container {
    width: 100%;
    height: 100%;
    background-color: var(--viewer-background-color);
  }
</style>

<div 
  class="stl-viewer-host"
  style="--viewer-background-color: {viewerBackgroundColor};"
>
  <div class="viewer-container" bind:this={container}></div>

  <Toolbar
    {viewMode}
    onResetView={handleResetView}
    onToggleViewMode={handleToggleViewMode}
    onToggleWireframe={handleToggleWireframe}
    onSetView={handleSetView}
    {toolbarBackgroundColor}
    {toolbarButtonBackgroundColor}
    {toolbarButtonHoverBackgroundColor}
    {toolbarButtonForegroundColor}
    {toolbarButtonBorderColor}
  />

  <InfoPanel
    {modelInfo}
    {infoPanelBackgroundColor}
    {infoPanelForegroundColor}
    {infoPanelSpanBackgroundColor}
  />
</div>
