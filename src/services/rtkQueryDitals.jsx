// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
// export const cardsDetailsApi = createApi({
//     reducerPath: "cardsDetailsApi",
//     baseQuery: fetchBaseQuery({baseUrl: "/apiDetails/:id"}),
//     endpoints: (builder) => ({
//         getAllDetailsCards: builder.query({
//             query: () => ({
//                 url: "",
//                 method: "GET",
//             })
//         })
//     })
// })

// export const { useGetAllDetailsCardsQuery } = cardsDetailsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const cardsDetailsApi = createApi({
    reducerPath: "cardsDetailsApi",
    baseQuery: fetchBaseQuery({baseUrl: ""}),
    endpoints: (builder) => ({
        getAllDetailsCards: builder.query({
            query: (cardId) => `${cardId}`,
        })
    })
})

export const { useGetAllDetailsCardsQuery } = cardsDetailsApi;


//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
// export const cardsDetailsApi = createApi({
//     reducerPath: "cardsDetailsApi",
//     baseQuery: fetchBaseQuery({baseUrl: "/api.divar.ir/v8/posts-v2/web/"}),
//     endpoints: (builder) => ({
//         getAllDetailsCards: builder.query({
//             query: (cardId) => `https://api.divar.ir/v8/posts-v2/web/${cardId}`,
//         })
//     })
// })

// export const { useGetAllDetailsCardsQuery } = cardsDetailsApi;