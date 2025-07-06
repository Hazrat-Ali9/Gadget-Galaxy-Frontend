// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFeather: builder.mutation({
        query: (formData) => {
          return {
            url: `/api/v1/feather/create-feater`,
            method: "POST",
            body: formData,
          };
        },
      }),
    getFeather: builder.query({
        query: () => {
          return {
            url: `/api/v1/feather/get-feather`,
            method: "GET",
          };
        },
      }),
  }),
});

export const {
    useAddFeatherMutation,
    useGetFeatherQuery
  } = featherAPI;