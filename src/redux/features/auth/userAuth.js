import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
        query: (data) => {
          return {
            url: `/api/v1/auth/register`,
            method: "POST",
            body: data,
          };
        },
      }),
    loginUser: builder.mutation({
        query: (data) => {
          return {
            url: `/api/v1/auth/login`,
            method: "POST",
            body: data,
          };
        },
      }),
    getUserProfile: builder.query({
        query: () => {
          return {
            url: `/api/v1/auth/get-user-profile`,
            method: "GET",
          };
        },
      }),
    getAllUser: builder.query({
        query: () => {
          return {
            url: `/api/v1/auth/get-user`,
            method: "GET",
          };
        },
      }),
    updateProfile: builder.mutation({
        query: (data) => {
          return {
            url: `/api/v1/auth/update-profile`,
            method: "PATCH",
            body: data,
          };
        },
      }),
    updateUserRole: builder.mutation({
        query: (data) => {
          const id = data.id
          return {
            url: `/api/v1/auth/update-user-role/${id}`,
            method: "PATCH",
            body: data,
          };
        },
      }),
    deleteUser: builder.mutation({
        query: (id) => ({
          url: `/api/v1/auth/delete-user/${id}`,
          method: "DELETE",
        }),
      }),
  }),
});

export const {
    useCreateUserMutation,
    useLoginUserMutation,
    useGetUserProfileQuery,
    useUpdateProfileMutation,
    useGetAllUserQuery,
    useUpdateUserRoleMutation,
    useDeleteUserMutation
  } = featherAPI;