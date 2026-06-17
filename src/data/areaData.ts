// Combines the two area data parts into a single map.
import { AREA_DATA_1 } from "./areaData1";
import { AREA_DATA_2 } from "./areaData2";
import type { AreaData } from "./areaData1";

export const AREA_TEXT_MAP: Record<string, AreaData> = {
  ...AREA_DATA_1,
  ...AREA_DATA_2,
};
