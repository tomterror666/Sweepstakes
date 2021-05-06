import { createStore, combineReducers } from 'redux';
import { getTipsReducer } from '../reducers/getTipsReducer';

const rootReducer = combineReducers({ count: getTipsReducer });

export const configureStore = () => {
  return createStore(rootReducer);
}
