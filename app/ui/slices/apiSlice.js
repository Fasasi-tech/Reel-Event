import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: '/'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['user'],  //automated re-fetching
    endpoints: (builder) => ({

    })
})