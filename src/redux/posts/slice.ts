import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'
import { PostFilter } from '../../types'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getPostsApi: builder.query({
      query: (filter?: PostFilter) => {

        if (filter) {
          const postFilterRecord: Record<string, string> = {
            category: filter.category,
            page: filter.page || "1",
            limit: filter.limit || "10"
          };
          return `/post?${new URLSearchParams(postFilterRecord).toString()}`
        }
        
        return `/post`
      }
    })
  })
})

export const { useGetPostsApiQuery, reducer } = postsApi
