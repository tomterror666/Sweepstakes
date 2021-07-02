import { GET_ALL_NUMBERS } from "../constants/actionTypes";
import { Lottory } from "../models/lottory";
import { parseNumbers } from "../utils/parse-numbers";
import { readMyTips } from "../actions/read-my-tips";

const initialState = { numbers: new Lottory() };

export const getAllNumbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NUMBERS:
      const newNumbers = parseNumbers(
        action.payload.lottory,
        action.payload.startingYear
      );
      return { ...state, numbers: newNumbers };
    default:
      return state;
  }
};
