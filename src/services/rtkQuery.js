import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: ({ page, lastPostDate }) => ({
        url: "/web-search/1/ROOT",
        method: "POST",
        body: {
            page,
            json_schema: { category: { value: 'ROOT' }, cities: ["1"] },
            last_post_date: lastPostDate,
        }
      }),
    }),
    getAllDetailsCards: builder.query({
      query: ({token}) => ({
          url: `/posts-v2/web/${token}`,
          method: "GET",
      })
  })
  }),
});


export const { useGetAllCardsQuery, useGetAllDetailsCardsQuery } = cardsApi;