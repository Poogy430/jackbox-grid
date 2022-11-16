import {Game} from '@/models/Games';

enum TIERS {
  LOVE = 0,
  LIKE,
  LEAVE,
  default
}

interface TierRowData {
  tier: TIERS,
  tierName: string,
  games: Array<GridItemData>,
}

interface GridItemData {
  id: number,
  game: Game,
  tier: TIERS,
}

export {TIERS, TierRowData, GridItemData};