import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'

console.log(APIS_URLS.OBSERVATORIO_BACK)

export const sponsorImagesApi = createApi({
  reducerPath: 'sponsorImagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getSponsorImages: builder.query({
      query: () => '/logo'
    })
  })
})

export const { useGetSponsorImagesQuery, reducer } = sponsorImagesApi
