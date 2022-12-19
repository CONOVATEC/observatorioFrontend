import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getPostsApi: builder.query({
      query: () => '/post'
    })
  })
})

export const { useGetPostsApiQuery, reducer } = postsApi
