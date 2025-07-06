import { apiSlice } from "../api/apiSlice";

const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
  }),
});

export default categoriesApi;
export const { useGetCategoriesQuery } = categoriesApi;
