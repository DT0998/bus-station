import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import featureReducer from "../../redux/feature/slice";
import layoutReducer from "../../redux/layout/slice";
import persistStore from "redux-persist/es/persistStore";

// root config persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

// root reducer
const rootReducer = combineReducers({
  layout: layoutReducer,
  feature: featureReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// check if server or client use store or persist store
export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return store;
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
    store.persistor = persistStore(store);
    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
