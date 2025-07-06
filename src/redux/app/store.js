
import { configureStore } from "@reduxjs/toolkit";;
import authReducer from "../Slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
setupListeners(store.dispatch);