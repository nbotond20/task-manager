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

export const authApiSlice = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'authentication',
                method: 'POST',
                body
            })
        }),
        register: builder.mutation({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body
            })
        })
    })
});

// reducer
export const authApiSliceReducer = authApiSlice.reducer;
// hooks
export const { useLoginMutation, useRegisterMutation } = authApiSlice;
