import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/slice";

const reducer = combineReducers({
  sidebar: sidebarReducer,
});

export default reducer;
