import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { RootState } from "@/config/store";

const initialState = {
  toggle: false,
};

const slice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    // add sync reducer action from this slice
    toggleMenu: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

// root config persist
const persistConfig = {
  key: "sidebar",
  storage,
  whitelist: [],
};

export const { toggleMenu } = slice.actions;
export const selectorToggleMenu = (state: RootState) =>
  state.layout.sidebar.toggle;
// reducer persist
export default persistReducer(persistConfig, slice.reducer);
