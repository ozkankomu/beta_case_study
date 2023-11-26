import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sessionId from "./session";
import cartSlice from './cart';
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['sessionId', 'cartSlice']
};

const reducers = combineReducers({
  sessionId,cartSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type IModule = {
  sessionId: ReturnType<typeof sessionId>;
  cartSlice: ReturnType<typeof cartSlice>;
};
