import axios from 'axios';


export default {
    lastPostList: async function(page, lastPostDate) {
        try {
            const response = await axios.post("/api", {
                page: page,
                json_schema: {category: {value: "ROOT"},
                cities: ["1"]},
                last_post_date: lastPostDate
            })
            return {
                lastPostDate: response.data.last_post_date,
                product: response.data.web_widgets.post_list,
            };
            
        } catch (error) {
            throw error;
        }
    },
}
