import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIS_URLS } from '../../../config';

export const postsCategoriesApi = createApi({
  reducerPath: 'postsCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APIS_URLS.OBSERVATORIO_BACK,
    prepareHeaders: (headers) => {
      const token = 'AuthorizationObservatorio2024';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPostsCategoriesApi: builder.query<any, void>({
      query: () => {
        return 'categories';
      },
    }),
  }),
});

export const { useGetPostsCategoriesApiQuery, reducer } = postsCategoriesApi;
