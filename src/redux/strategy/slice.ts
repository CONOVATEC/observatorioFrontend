import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIS_URLS } from '../../../config';

export const strategyApi = createApi({
  reducerPath: 'strategyApi',
  baseQuery: fetchBaseQuery({ baseUrl: APIS_URLS.OBSERVATORIO_BACK }),
  endpoints: (builder) => ({
    getInfoStrategy: builder.query({
      query: () => '/api/youthStrategy',
    }),
  }),
});

export const { useGetInfoStrategyQuery, reducer } = strategyApi;
