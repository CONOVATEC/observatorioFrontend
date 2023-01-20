import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'

export const nationalApi = createApi({
  reducerPath: 'nationalApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getNationalApi: builder.query({
      query: () => '/youthPolicy'
    })
  })
})

export const { useGetNationalApiQuery, reducer } = nationalApi