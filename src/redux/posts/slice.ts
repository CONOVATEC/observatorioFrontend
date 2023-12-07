import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIS_URLS } from '../../../config';
import { PostFilter } from '../../types';

export const postsApi: any = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: (builder) => ({
    getPostsApi: builder.query({
      query: (filter?: PostFilter) => {
        if (filter) {
          const postFilterRecord: Record<string, string> = {
            category: filter.category,
            page: filter.page || '3',
          };
          return `/api/v1/posts?included=user,category,tags&perPage=${postFilterRecord.page}&filter[category]=${postFilterRecord.category}`;
        }
        return '/api/v1/posts?included=user,category,tags&perPage=3';
      },
    }),
  }),
});

export const { useGetPostsApiQuery, reducer } = postsApi;
