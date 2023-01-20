import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIS_URLS } from '../../../config'

export const aboutObservatoryApi = createApi({
  reducerPath: 'aboutObservatoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: builder => ({
    getInfoAboutObservatory: builder.query({
      query: () => '/youtObservatory' // Cambiar por youthObservatory
    })
  })
})

export const { useGetInfoAboutObservatoryQuery, reducer } = aboutObservatoryApi
