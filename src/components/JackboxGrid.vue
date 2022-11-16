<template>
  <div class="grid-container">
    <div
      v-for="tier in tierRows"
      :key="tier.tier"
      class="tier-row"
      @drop="itemDropped($event, tier.tier)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div class="tier-header">
        <h2>{{tier.tierName}}</h2>
      </div>
      <div class="tier-items">
        <GridItem
          v-for="(item, i) in tier.games"
          :key="i"
          :gridItem="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GridItem from "./GridItem.vue";
import {TIERS, TierRowData, GridItemData} from '@/models/Grid';
import {games} from '@/models/Games';

@Component({
  components: { GridItem },
})
export default class JackboxGrid extends Vue {
  // Forward declare enum for template use
  TIERS = TIERS;
  tierRows = new Array<TierRowData>();
  gridItems = new Array<GridItemData>();

  /**
   * Set up row data, grid item data, and set items to rows
   */
  created() {
    // Get tiers available
    this.buildItems();
    this.buildRows();
  }

  /**
   * Build row for each tier
   */
  buildRows() {
    // Love It tier
    const loveTierData: TierRowData = {
      tier: TIERS.LOVE,
      tierName: 'Love It',
      games: new Array<GridItemData>(),
    };
    this.tierRows.push(loveTierData);

    // Like It tier
    const likeTierData: TierRowData = {
      tier: TIERS.LIKE,
      tierName: 'Love It',
      games: new Array<GridItemData>(),
    };
    this.tierRows.push(likeTierData);

    // Leave It tier
    const leaveTierData: TierRowData = {
      tier: TIERS.LEAVE,
      tierName: 'Love It',
      games: new Array<GridItemData>(),
    };
    this.tierRows.push(leaveTierData);

    // Haven't Played tier
    const unplayedTierData: TierRowData = {
      tier: TIERS.default,
      tierName: `Haven't Played`,
      games: new Array<GridItemData>(),
    };
    this.tierRows.push(unplayedTierData);

    // No DB or local storage set up, so default all to "Haven't Played"
    unplayedTierData.games = [...this.gridItems];
  }

  /**
   * Get all games, build grid items, and assign to default tier
   * Default tier is TIERS.default ("Haven't Played")
   */
  buildItems() {
    games.forEach((game, i) => {
      const gridItem: GridItemData = {
        id: i,
        game: game,
        tier: TIERS.default,
      };
      this.gridItems.push(gridItem);
    });
  }

  /**
   * Tier row dropped handler
   * @param e - Drop event
   * @param tier - Tier that was dropped on
   */
  itemDropped(e, tier: TIERS) {
    // Get Item
    const itemID = e.dataTransfer.getData('itemID');
    let item = this.gridItems.find((i) => {
      return i.id === parseInt(itemID);
    });

    // // Item not found, or was dropped on same row it belonged to, return
    if (item === undefined || item.tier === tier) return;
    this.setItemTier(item, tier);
  }

  /**
   * Move given item from it's current tier and move to new tier
   * @param item - The grid item / game being moved
   * @param tier - the tier row to move the item to
   */
  setItemTier(item: GridItemData, tier: TIERS) {
    // Get tier that item currently lives on
    const currentTier = this.tierRows[item.tier];
    // Find games index within that tier
    const gameIndex = currentTier.games.findIndex((g) => {
      return g.id === item.id;
    });

    if (gameIndex > -1) {
      // Remove from current tier
      let removed = currentTier.games.splice(gameIndex, 1)[0];
      // Update item's current tier
      removed.tier = tier;
      // Get new tier row
      const newTier = this.tierRows[tier];
      // Push item to new row
      newTier.games.push(removed);
    }
  }
}
</script>

<style lang="scss">
  .grid-container {
    box-sizing: border-box;
    border: 1px solid green;
    color: white;
    height: auto;
    margin: 0 2rem;

    display: grid;
    grid-template-columns: 15rem auto auto auto auto;
    grid-template-rows: auto auto auto auto;

    .tier-row {
      grid-column: 1/6;
      border-bottom: 1px solid green;
      display: flex;

      &:last-child {
        border: none;
      }
      .tier-header {
        min-width: 15rem;
        min-height: 5rem;
        border-right: 1px solid green;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .tier-items {
        width: 100%;
        min-height: 100px;
        padding: 1rem 0 1rem 1.5rem;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        row-gap: 0.5rem;
        column-gap: 0.5rem;
      }
    }
  }

  
</style>
