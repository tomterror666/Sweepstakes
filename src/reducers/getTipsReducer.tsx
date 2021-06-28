import { ADD_A_TIP, GET_MY_TIPS, REMOVE_A_TIP } from "../constants/actionTypes";
import { Tip } from "../models/tip";

const initialState: Tip[] = [];

export const getTipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_TIPS:
      return action.payload as Tip[];
    case REMOVE_A_TIP:
      return action.payload as Tip[];
    case ADD_A_TIP:
      return action.payload as Tip[];
    default:
      return state;
  }
};
