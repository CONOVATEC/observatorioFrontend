import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'

export const aboutCmpjApi = createApi({
  reducerPath: 'aboutCmpjApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getInfoCmpj: builder.query({
      query: () => '/cmpj'
    })
  })
})

export const { useGetInfoCmpjQuery, reducer } = aboutCmpjApi
