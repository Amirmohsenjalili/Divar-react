import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const empitySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: () => ({}),
})
