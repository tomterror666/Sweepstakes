import { Tip } from "../models/tip";

export const convertTips = (jsonTips: Tip[]): Tip[] => {
  const usableTips: Tip[] = [];

  if (jsonTips) {
    jsonTips.map((tip) => {
      const usableTip = new Tip(tip);
      usableTips.push(usableTip);
    });
  }

  return usableTips;
};
