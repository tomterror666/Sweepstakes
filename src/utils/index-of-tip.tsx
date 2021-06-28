import { Tip } from "../models/tip";

export const indexOfTip = (tip: Tip, allTips: Tip[]): number => {
  let foundIndex = -1;

  allTips.map((entry: Tip, index) => {
    if (entry.isEqual(tip)) {
      foundIndex = index;
    }
  });

  return foundIndex;
};
