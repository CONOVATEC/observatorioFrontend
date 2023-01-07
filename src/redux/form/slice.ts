import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { APIS_URLS, SUPA_BASE } from '../../../config'

const { ANON_KEY : key } = SUPA_BASE

export const formContactApi = createApi({
  reducerPath: 'formContactApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.FORM_API }),
  endpoints: builder => ({
    postFormContact: builder.mutation({
      query: (body) => ({
        url:'/contacts',
        body,
        method: 'POST',
        headers:{
          apikey: key,
          Authorization: `Bearer ${key}`
        }
      })
    })
  })
})

export const { usePostFormContactMutation, reducer } = formContactApi
