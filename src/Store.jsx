import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "./Features/Reducer";

const reducers = combineReducers({
  userReducer: users,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== "production" ? { persistConfig } : false,
});
// Rightnow no use of redux thunk middleware    // other store enhancers if any  ));let persistor = persistStore(store);

export default store;
