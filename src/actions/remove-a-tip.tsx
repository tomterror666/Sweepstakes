import { Tip } from "../models/tip";
import { REMOVE_A_TIP } from "../constants/actionTypes";
import AsyncStorage from "@react-native-community/async-storage";
import { indexOfTip } from "../utils/index-of-tip";
import { convertTips } from "../utils/convert-tips";

export const removeATip = (tip: Tip) => {
  return async (dispatch) => {
    const tipsJson = await AsyncStorage.getItem("myTips");

    const tips: Tip[] = convertTips(JSON.parse(tipsJson));

    if (tips) {
      const indexToRemove = indexOfTip(tip, tips);
      tips.splice(indexToRemove, 1);

      await AsyncStorage.setItem("myTips", JSON.stringify(tips));

      dispatch({ type: REMOVE_A_TIP, payload: tips });
    }
  };
};
