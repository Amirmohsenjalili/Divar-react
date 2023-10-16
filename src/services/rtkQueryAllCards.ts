import { empitySplitApi } from "./rtkQuery";

const allCardsApi = empitySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCards: build.query({
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
    }),
    overrideExisting: false,
})

export const { useGetAllCardsQuery } = allCardsApi;
export default allCardsApi; 