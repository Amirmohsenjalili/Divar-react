export type PostData = {
    data: {
      title: string;
      top_description_text: string;
      bottom_description_text: string;
      middle_description_text: string;
      image_url?: { src: string }[];
      token: string;
    };
  };
  
export type WebWidgetsData = {
    web_widgets?: {
      post_list: PostData[];
    };
    last_post_date?: number;
  };
  