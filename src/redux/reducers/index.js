import counterReducer from "./counters.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
});

export default allReducers;
