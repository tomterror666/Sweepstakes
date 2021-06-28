import axios from "axios";
import { GET_ALL_NUMBERS } from "../constants/actionTypes";

export const readResults = (countingYear: number) => {
  try {
    return async (dispatch) => {
      const response = await axios.get(
        `https://johannesfriedrich.github.io/LottoNumberArchive/Lottonumbers_tidy_complete.json`
      );
      if (response.data) {
        dispatch({ type: GET_ALL_NUMBERS, payload: response.data });
      }
    };
  } catch (error) {
    console.log(error);
  }
};
