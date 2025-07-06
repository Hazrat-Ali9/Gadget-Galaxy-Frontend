import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProducts: builder.mutation({
        query: (formData) => {
          return {
            url: `/api/v1/product/create-product`,
            method: "POST",
            body: formData,
          };
        },
      }),
    getProducts: builder.query({
        query: () => {
          return {
            url: `/api/v1/feather/get-feather`,
            method: "GET",
          };
        },
      }),
    getFeatherProduct: builder.query({
        query: ({feather}) => {
          return {
            url: `/api/v1/product/get-feather-product?feather=${feather}`,
            method: "GET",
          };
        },
      }),
    getAllProduct: builder.query({
        query: () => {
          return {
            url: `/api/v1/product/get-product`,
            method: "GET",
          };
        },
      }),
      deleteToProduct: builder.mutation({
        query: (id) => ({
          url: `/api/v1/product/delete-product/${id}`,
          method: "DELETE",
        }),
      }),
  }),
});

export const {
    useAddProductsMutation,
    useGetFeatherProductQuery,
    useGetAllProductQuery,
    useDeleteToProductMutation
  } = featherAPI;