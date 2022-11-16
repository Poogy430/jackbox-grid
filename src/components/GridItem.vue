<template>
  <div
    class="game-card"
    @mouseover="showOverlay = true"
    @mouseleave="showOverlay = false"
    draggable
    @dragstart="startDrag($event)"
  >
    <img :src="imageSrc"/>
    <div 
      v-if="showOverlay"
      class="overlay"
    >
      {{gridItem.game.title}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GridItemData } from "@/models/Grid";

@Component
export default class GridItem extends Vue {
  @Prop({required: true}) gridItem!: GridItemData;

  showOverlay = false;

  // Computed string for source of image
  get imageSrc() {
    if (this.gridItem.game.imgSrc === '') {
      return require(`../assets/images/games/ydkjclassic.webp`);
    }
    return require(`../assets/images/games/${this.gridItem.game.imgSrc}`);
  }

  /**
   * Start dragging of item handler
   * @param e - The drag event
   */
  startDrag(e: DragEvent) {
    if (!e.dataTransfer) return;
    // Hide mouse over overlay
    this.showOverlay = false;
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('itemID', this.gridItem.id.toString());
  }
}
</script>

<style lang="scss" scoped>
  .game-card {
    position: relative;
    width: 100px;
    height: 100px;
    border: 2px solid silver;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    cursor: grab;

    img {
      width: 100%;
      height: 100%;
    }

    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,0.95);

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>