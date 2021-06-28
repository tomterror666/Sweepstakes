import { Tip } from "../models/tip";
import AsyncStorage from "@react-native-community/async-storage";
import { convertTips } from "../utils/convert-tips";
import { indexOfTip } from "../utils/index-of-tip";
import { ADD_A_TIP } from "../constants/actionTypes";

export const addATip = (tip: Tip) => {
  return async (dispatch) => {
    const tipsJson = await AsyncStorage.getItem("myTips");

    const tips: Tip[] = convertTips(JSON.parse(tipsJson));
    console.log("0022", tips, tip);
    if (tips) {
      tips.push(tip);

      await AsyncStorage.setItem("myTips", JSON.stringify(tips));

      dispatch({ type: ADD_A_TIP, payload: tips });
    }
  };
};
