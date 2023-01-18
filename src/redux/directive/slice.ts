import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'

export const directiveApi = createApi({
  reducerPath: 'directiveApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getDirectiveApi: builder.query({
      query: () => '/directive'
    })
  })
})

export const { useGetDirectiveApiQuery, reducer } = directiveApi
