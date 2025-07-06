import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../EndPoints/fetchbasequery";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "../Slice/authSlice";
import  useReducer  from "../Slice/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: useReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

