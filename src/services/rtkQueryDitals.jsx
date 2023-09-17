import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const cardsDetailsApi = createApi({
    reducerPath: "cardsDetailsApi",
    baseQuery: fetchBaseQuery({baseUrl: "/apiDetails"}),
    endpoints: (builder) => ({
        getAllDetailsCards: builder.query({
            query: () => ({
                url: "",
                method: "GET"
            })
        })
    })
})

export const { useGetAllDetailsCardsQuery } = cardsDetailsApi;