import { createStore, combineReducers } from "redux";
import { countReducer } from "./reducers";

export default createStore(combineReducers({ count: countReducer }));
