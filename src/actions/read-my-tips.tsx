import { Tip } from "../models/tip";
import AsyncStorage from "@react-native-community/async-storage";
import { GET_MY_TIPS } from "../constants/actionTypes";
import { convertTips } from "../utils/convert-tips";

export const readMyTips = () => {
  return async (dispatch) => {
    const tipsJson = await AsyncStorage.getItem("myTips");

    const tips: Tip[] = JSON.parse(tipsJson);
    const usableTips: Tip[] = convertTips(tips);

    dispatch({ type: GET_MY_TIPS, payload: usableTips });
  };
};
