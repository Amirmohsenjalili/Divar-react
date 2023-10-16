export type data = {
    sections: {
      widgets: {
        data: any;
      }[];
    }[];
    seo: {
      web_info: {
        title: string;
      };
    };
    share: {
      title: string;
    };
  };
  
export type Params = {
    id: string;
  };