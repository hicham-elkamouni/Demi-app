import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
