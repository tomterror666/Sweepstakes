import { createStore, combineReducers, applyMiddleware } from "redux";
import { getTipsReducer } from "../reducers/getTipsReducer";
import { getAllNumbersReducer } from "../reducers/getAllNumbersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  getAllNumbersReducer,
  getTipsReducer,
});

/*export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};*/
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
