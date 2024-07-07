import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIS_URLS } from '../../../config';
import { PostFilter } from '../../types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://admindev.observatoriojovenperu.com.pe/api/v1/',
    prepareHeaders: (headers) => {
      const token = 'AuthorizationObservatorio2024';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPostsApi: builder.query<any, PostFilter | void>({
      query: (filter) => {
        if (filter) {
          const postFilterRecord: Record<string, string> = {
            category: filter.category,
            page: filter.page || '3',
          };
          return `posts?included=user,category,tags&perPage=${postFilterRecord.page}&filter[category]=${postFilterRecord.category}`;
        }
        return 'posts?included=user,category';
      },
    }),
  }),
});

export const { useGetPostsApiQuery, reducer } = postsApi;
