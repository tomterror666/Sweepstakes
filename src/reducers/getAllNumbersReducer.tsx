import { GET_ALL_NUMBERS } from "../constants/actionTypes";
import { Lottory } from "../models/lottory";
import { parseNumbers } from "../utils/parse-numbers";
import { readMyTips } from "../actions/read-my-tips";

const initialState = new Lottory();

export const getAllNumbersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NUMBERS:
      const newNumbers = parseNumbers(action.payload, 2021);
      return newNumbers;
    default:
      return state;
  }
};
