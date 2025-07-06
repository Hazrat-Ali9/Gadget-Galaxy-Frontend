// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addToCartProduct: builder.mutation({
            query: (data) => {
                const id = data.id;
                const body = data.body;
                return {
                    url: `/api/v1/product/add-to-cart/${id}`,
                    method: "POST",
                    body,
                };
            },
        }),
        getAddToCartProducts: builder.query({
            query: () => {
                return {
                    url: `/api/v1/product/get-to-cart`,
                    method: "GET",
                };
            },
            invalidatesTags: ["cart-tags"],
        }),
        getOrderProduct: builder.query({
            query: () => {
                return {
                    url: `/api/v1/product/get-all-order-products`,
                    method: "GET",
                };
            },
            invalidatesTags: ["cart-tags"],
        }),
        deleteToCart: builder.mutation({
            query: (id) => ({
              url: `/api/v1/product/delete-to-cart/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["cart-tags"],
          }),
          confirmProduct: builder.mutation({
            query: () => {
                return {
                    url: `/api/v1/product/get-order-products`,
                    method: "POST",
                };
            },
           
        }),
    }),
});

export const {
    useAddToCartProductMutation,
    useGetAddToCartProductsQuery,
    useDeleteToCartMutation,
    useConfirmProductMutation,
    useGetOrderProductQuery
} = featherAPI;