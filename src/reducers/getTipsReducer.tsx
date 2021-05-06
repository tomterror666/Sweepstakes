import { GET_TIPS } from '../constants/actionTypes';

const initialState = { count: 0 };

export const getTipsReducer = (state = initialState, action) => {
  switch(action.type) {
  case GET_TIPS:
    return {...state, count:action.payload};
  default:
    return state;
  }
}
