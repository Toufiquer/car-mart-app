/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";

export const carApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getCars: builder.query({
      query: () => `/car`,
    }),
    getCar: builder.query({
      query: (id) => `/car/${id}`,
    }),
    updateCar: builder.mutation({
      query: ({ id, data }) => ({
        url: `/car/${id}`,
        method: "PUT",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getCars", undefined, (draft) => {
            const newValue = draft.map((curr) => {
              if (curr._id === arg.id) {
                return { ...curr, ...arg.data };
              } else {
                return curr;
              }
            });
            Object.assign(draft, newValue);
          })
        );
        // update getInstructors query
        const patchResult2 = dispatch(
          apiSlice.util.updateQueryData(
            "getInstructors",
            undefined,
            (draft) => {
              draft.push(...arg.data);
              // Object.assign(draft, newValue);
            }
          )
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/car/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData("getCars", undefined, (draft) => {
            const index = draft.findIndex(
              (i) => parseInt(i._id) === parseInt(arg)
            );
            draft.splice(index, 1);
          })
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),
    // for registration
    addCar: builder.mutation({
      query: (data) => ({
        url: `/car`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData("getCars", undefined, (draft) => {
                draft.push(query.data);
              })
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
    // for login
    addLogIn: builder.mutation({
      query: (data) => ({
        url: `/carLogIn`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // debugger;
        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          if (query?.data?.id) {
            dispatch(
              apiSlice.util.updateQueryData("getCars", undefined, (draft) => {
                draft.push(query.data);
              })
            );
          }
          // pessimistic cache update end
        } catch {}
      },
    }),
  }),
});
export const {
  useGetCarsQuery,
  useGetCarQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useAddCarMutation,
  useAddLogInMutation,
} = carApi;
