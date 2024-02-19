import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootState } from "../../../config/store";

const initialState = {
  // account: [],
};

// action toggleMenu
export const loginMetamask = createAsyncThunk("wallet/connect", async () => {});

const slice = createSlice({
  name: "myWallet",
  initialState: initialState,
  reducers: {
    // add sync reducer action from this slice
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginMetamask.fulfilled,
      (state, action: PayloadAction) => {}
    );
  },
});

// root config persist
const persistConfig = {
  key: "myWallet",
  storage,
  whitelist: [],
};

export const selectorAccounts = (state: RootState) =>
  state.feature.mywallet.account;
// reducer persist
export default persistReducer(persistConfig, slice.reducer);
