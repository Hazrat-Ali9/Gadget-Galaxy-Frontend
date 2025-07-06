import { HYDRATE } from "next-redux-wrapper";


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { logOut, setCredentials } from "../../Slice/authSlice";
const URL = "https://gadget-galaxy-server-seven.vercel.app";
// const URL = "http://localhost:5000/";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    const refreshToken = api.getState().auth.refreshToken;
    const data = { refreshToken: refreshToken };
    const refreshResult = await axios.post(`${URL}/`, data);
    if (refreshResult?.data) {
      api.dispatch(setCredentials());
      const accessToken = refreshResult.data.accessToken;
      console.log(accessToken);
      const refreshToken = refreshResult.data.refreshToken;
      console.log(refreshToken);
      console.log("with refresh");
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  tagTypes: [
    'cart-tags'
  ],
  extractRehydrationInfo(action, { reducerPath }) {
  if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
