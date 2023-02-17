import { combineReducers } from "@reduxjs/toolkit";
import todos from "./Todoreducer";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
