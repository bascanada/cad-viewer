<script lang="ts">
  import type { ViewMode, ViewDirection } from '../three/CameraController.js';

  export let viewMode: ViewMode;
  export let onResetView: () => void;
  export let onToggleViewMode: () => void;
  export let onToggleWireframe: () => void;
  export let onSetView: (view: ViewDirection) => void;

  // Theme props
  export let toolbarBackgroundColor: string;
  export let toolbarButtonBackgroundColor: string;
  export let toolbarButtonHoverBackgroundColor: string;
  export let toolbarButtonForegroundColor: string;
  export let toolbarButtonBorderColor: string;
</script>

<div 
  class="toolbar"
  style="
    --toolbar-background-color: {toolbarBackgroundColor};
    --toolbar-button-background-color: {toolbarButtonBackgroundColor};
    --toolbar-button-hover-background-color: {toolbarButtonHoverBackgroundColor};
    --toolbar-button-foreground-color: {toolbarButtonForegroundColor};
    --toolbar-button-border-color: {toolbarButtonBorderColor};
  "
>
  <button on:click={onResetView}>Reset View</button>
  <button on:click={onToggleViewMode}>View: {viewMode}</button>
  <button on:click={onToggleWireframe}>Toggle Wireframe</button>
  <button on:click={() => onSetView('top')}>Top</button>
  <button on:click={() => onSetView('front')}>Front</button>
  <button on:click={() => onSetView('right')}>Right</button>
</div>

<style>
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
</style>
