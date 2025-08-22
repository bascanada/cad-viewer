<svelte:options customElement="cad-viewer" />

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { SceneManager, CameraController, ModelOperations, type ModelInfo, type ViewMode } from './three/index.js';
  import { CADPersistence, type CADViewerState } from './persistence/CADPersistence.js';
  import Toolbar from './components/Toolbar.svelte';
  import InfoPanel from './components/InfoPanel.svelte';

  // --- Props ---
  export let payload: string = '';
  export let payloadType: 'stl' | '3mf' = 'stl';
  export let color = '#fca503';
  export let viewerBackgroundColor = '#1e1e1e';
  export let gridColor = '#888888';
  export let gridCenterLineColor = '#444444';
  export let gizmoScale = 1.0; // Multiplier for orientation gizmo size (1.0 = default size)
  export let persistenceId: string = ''; // Unique identifier for persistence storage

  // Ensure gizmoScale is always a number (custom elements pass attributes as strings)
  $: gizmoScaleNumber = typeof gizmoScale === 'string' ? parseFloat(gizmoScale) || 1.0 : gizmoScale;

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
  let isWireframeMode = false;
  let currentModelData: { payload: string; payloadType: 'stl' | '3mf'; color: string } | null = null;
  let isInitialized = false;

  onMount(() => {
    initializeViewer();
    setupResizeObserver();
    
    // Load saved state first
    loadSavedState();
    
    // If no saved model and payload is provided, load it
    if (!currentModelData && payload) {
      loadModel();
    }
    
    isInitialized = true;
  });

  onDestroy(() => {
    cleanup();
  });

  function initializeViewer() {
    sceneManager = new SceneManager(container, viewerBackgroundColor, gridColor, gridCenterLineColor, gizmoScaleNumber);
    cameraController = new CameraController(
      sceneManager.perspectiveCamera,
      sceneManager.orthographicCamera,
      sceneManager.controls,
      container
    );
    sceneManager.updateCurrentCamera(cameraController.currentCamera);
    sceneManager.startAnimation();
    setupCameraChangeListeners();
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
    currentModelData = { payload, payloadType, color };
    modelInfo = sceneManager.loadModel(payload, payloadType, color);
    if (sceneManager.currentMesh) {
      cameraController.frameToObject(sceneManager.currentMesh, false);
      // Update wireframe state from mesh
      isWireframeMode = ModelOperations.getWireframeState(sceneManager.currentMesh);
      
      // Ensure the camera target is at origin after framing
      sceneManager.controls.target.set(0, 0, 0);
      sceneManager.controls.update();
    }
    
    // Save state after loading model
    // Force save so that when payload changes we immediately update persisted model
    saveCurrentState(true);
  }

  function loadSavedState() {
    const savedState = CADPersistence.loadState(persistenceId || undefined);
    if (!savedState) return;

    console.log('Loading saved state for ID:', persistenceId || 'default', savedState);

    // Restore camera mode first
    if (savedState.camera.mode !== viewMode) {
      viewMode = savedState.camera.mode;
      cameraController.setViewMode(viewMode);
      sceneManager.updateCurrentCamera(cameraController.currentCamera);
      sceneManager.controls.object = cameraController.currentCamera;
    }

    // If a payload prop was provided externally and it differs from the saved model,
    // prefer the incoming payload (do NOT restore the saved model). This ensures
    // the component behaves predictably when a parent updates the payload.
    const hasIncomingPayload = !!payload;
    const savedModel = savedState.model;

    if (savedModel && (!hasIncomingPayload || (hasIncomingPayload && savedModel.payload === payload && savedModel.payloadType === payloadType))) {
      // Restore model from saved state
      currentModelData = savedModel;
      modelInfo = sceneManager.loadModel(
        savedModel.payload,
        savedModel.payloadType,
        savedModel.color
      );
      
      // Model is loaded and centered, now apply saved camera state
      if (sceneManager.currentMesh) {
        // Center the model manually (just to be sure)
        const boundingBox = new THREE.Box3().setFromObject(sceneManager.currentMesh);
        const center = boundingBox.getCenter(new THREE.Vector3());
        sceneManager.currentMesh.position.sub(center);
        
        console.log('Model centered at:', sceneManager.currentMesh.position);
        console.log('Restoring camera to:', savedState.camera);
        
        // Manually apply camera state with proper handling for orthographic cameras
        cameraController.currentCamera.position.set(
          savedState.camera.position.x,
          savedState.camera.position.y,
          savedState.camera.position.z
        );
        
        sceneManager.controls.target.set(0, 0, 0); // Always target origin for models
        
        // Apply orthographic zoom if available
        if (savedState.camera.orthographicZoom && viewMode === 'orthographic') {
          const orthoCamera = cameraController.currentCamera as THREE.OrthographicCamera;
          orthoCamera.zoom = savedState.camera.orthographicZoom;
          orthoCamera.updateProjectionMatrix();
        }
        
        cameraController.currentCamera.lookAt(0, 0, 0);
        sceneManager.controls.update();
      }
    } else {
      // Do not restore the saved model because an incoming payload was provided
      // and differs; still apply the saved camera (useful when no model is present)
      CADPersistence.applyState(savedState, cameraController.currentCamera, sceneManager.controls);
    }

    // Restore wireframe mode
    if (sceneManager.currentMesh) {
      ModelOperations.setWireframeState(sceneManager.currentMesh, savedState.wireframe);
      isWireframeMode = savedState.wireframe;
    }
  }

  function saveCurrentState(force: boolean = false) {
    if (!sceneManager || !cameraController || (!isInitialized && !force)) return;

    const state = CADPersistence.createState(
      cameraController.currentCamera,
      sceneManager.controls,
      viewMode,
      isWireframeMode,
      currentModelData || undefined
    );

    console.log("saving state: ", persistenceId);

    CADPersistence.saveState(state, persistenceId || undefined);
  }

  function setupCameraChangeListeners() {
    if (!sceneManager?.controls) return;
    
    // Save state when camera changes
    sceneManager.controls.addEventListener('end', () => {
      if (isInitialized) {
        saveCurrentState();
      }
    });
  }

  function cleanup() {
    resizeObserver?.disconnect();
    sceneManager?.dispose();
  }

  // --- Toolbar Handlers ---
  function handleToggleViewMode() {
    viewMode = cameraController.toggleViewMode();
    sceneManager.updateCurrentCamera(cameraController.currentCamera);
    sceneManager.controls.object = sceneManager.currentCamera;
    
    // The camera controller handles position transfer, we just need to update the controls
    sceneManager.controls.update();
    
    // Save state after view mode change
    saveCurrentState();
  }

  function handleToggleWireframe() {
    ModelOperations.toggleWireframe(sceneManager.currentMesh);
    isWireframeMode = ModelOperations.getWireframeState(sceneManager.currentMesh);
    
    // Save state after wireframe change
    saveCurrentState();
  }

  function handleExportPNG() {
    sceneManager.exportScreenshot();
  }

  // --- Public API for controlling persistence ---
  export function clearSavedState() {
    CADPersistence.clearState(persistenceId || undefined);
  }

  export function getSavedState() {
    return CADPersistence.loadState(persistenceId || undefined);
  }

  // --- Reactive Statements ---
  $: if (sceneManager && payload) {
    // Check if payload has changed compared to current model data
    const hasChanged = !currentModelData || 
                      currentModelData.payload !== payload || 
                      currentModelData.payloadType !== payloadType;
    
    if (hasChanged) {
      loadModel();
    }
  }
  
  $: if (sceneManager && container) {
    const computedStyle = getComputedStyle(container);
    sceneManager.updateBackgroundColor(computedStyle.backgroundColor);
  }

  $: if (sceneManager) {
    sceneManager.updateGrid(gridColor, gridCenterLineColor);
  }

  $: if (sceneManager?.currentMesh && currentModelData) {
    ModelOperations.updateMeshColor(sceneManager.currentMesh, currentModelData.color);
    // Update current model data color and save state
    if (currentModelData.color !== color) {
      currentModelData = { ...currentModelData, color };
      if (isInitialized) {
        saveCurrentState();
      }
    }
  }

  $: if (sceneManager && gizmoScaleNumber) {
    sceneManager.updateGizmoScale(gizmoScaleNumber);
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
    onToggleViewMode={handleToggleViewMode}
    onToggleWireframe={handleToggleWireframe}
    onExportPNG={handleExportPNG}
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
