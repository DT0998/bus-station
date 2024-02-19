import { combineReducers } from "@reduxjs/toolkit";
import mywalletReducer from "./mywallet/slice";

const reducer = combineReducers({
  mywallet: mywalletReducer,
});

export default reducer;
