<script lang="ts">
  import type { ModelInfo } from '../three/SceneManager.js';

  export let modelInfo: ModelInfo;
  export let infoPanelBackgroundColor: string;
  export let infoPanelForegroundColor: string;
  export let infoPanelSpanBackgroundColor: string;
</script>

{#if modelInfo.dimensions}
  <div 
    class="info-panel"
    style="
      --info-panel-background-color: {infoPanelBackgroundColor};
      --info-panel-foreground-color: {infoPanelForegroundColor};
      --info-panel-span-background-color: {infoPanelSpanBackgroundColor};
    "
  >
    <strong>Model Info:</strong>
    <span>Triangles: {modelInfo.triangleCount.toLocaleString()}</span>
    <span>
      Dimensions (mm): {modelInfo.dimensions.x} x {modelInfo.dimensions.y} x {modelInfo.dimensions.z}
    </span>
  </div>
{/if}

<style>
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
</style>
