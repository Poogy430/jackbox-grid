<template>
  <div class="home">
    <div class="header">
      <h1>Jackbox Games Tier List</h1>
    </div>
    <jackbox-grid></jackbox-grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JackboxGrid from "@/components/JackboxGrid.vue";

@Component({
  components: { JackboxGrid },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: $font-color;

    .header {
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
  }
</style>
