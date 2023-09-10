import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: ({ page, lastPostDate }) => ({
        url: "",
        method: "POST",
        body: {
            page,
            json_schema: { category: { value: 'ROOT' }, cities: ["1"] },
            last_post_date: lastPostDate,
        }
      }),
    }),
  }),
});


export const { useGetAllCardsQuery } = cardsApi;