import axios from "axios";
import { GET_ALL_NUMBERS } from "../constants/actionTypes";

export const readLottery = (countingYear: number) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(
        `https://johannesfriedrich.github.io/LottoNumberArchive/Lottonumbers_tidy_complete.json`
      );
      if (response.data) {
        dispatch({
          type: GET_ALL_NUMBERS,
          payload: { lottory: response.data, startingYear: countingYear },
        });
      }
    };
  } catch (error) {
    console.log(error);
  }
};
