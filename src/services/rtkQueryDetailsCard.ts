import { empitySplitApi } from "./rtkQuery";

const detailsCardApi = empitySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getDetailsCard: build.query({
            query: ({token}) => ({
                url: `/posts-v2/web/${token}`,
                method: "GET",
            }),
        }),
    }),
    overrideExisting: false,
})

export const { useGetDetailsCardQuery } = detailsCardApi;