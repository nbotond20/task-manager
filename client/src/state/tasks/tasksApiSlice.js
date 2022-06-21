import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

export const tasksApiSlice = createApi({
    reducerPath: 'tasksApi',
    baseQuery,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ['Delete', 'Mutate'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: 'tasks'
            }),
            transformResponse: (response) => response.data,
            providesTags: ['Delete', 'Mutate']
        }),
        getTask: builder.query({
            query: (id) => ({
                url: `tasks/${id}}`
            }),
            transformResponse: (response) => response.data,
            providesTags: ['Delete', 'Mutate']
        }),
        getTasksRange: builder.query({
            query: (params) => ({
                url: 'tasks?$skip=' + params.skip + '&$limit=' + params.limit
            }),
            transformResponse: (response) => ({
                tasks: response.data,
                total: response.total
            }),
            providesTags: ['Delete', 'Mutate']
        }),
        createTask: builder.mutation({
            query: (body) => ({
                url: 'tasks',
                method: 'POST',
                body
            })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Delete']
        })
    })
});

// reducer
export const tasksApiSliceReducer = tasksApiSlice.reducer;
// hooks
export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useGetTasksRangeQuery,
    useCreateTaskMutation,
    useDeleteTaskMutation
} = tasksApiSlice;
