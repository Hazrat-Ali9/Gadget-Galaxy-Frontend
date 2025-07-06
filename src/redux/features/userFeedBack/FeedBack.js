import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFeedBack: builder.mutation({
        query: (formData) => {
          return {
            url: `/api/v1/feedback/send-feedback`,
            method: "POST",
            body: formData,
          };
        },
      }),
    getFeedBack: builder.query({
        query: () => {
          return {
            url: `/api/v1/feather/get-feather`,
            method: "GET",
          };
        },
      })
  }),
});

export const {
    useAddFeedBackMutation,
    useGetFeedBackQuery
  } = featherAPI;