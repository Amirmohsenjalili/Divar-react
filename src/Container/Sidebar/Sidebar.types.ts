export type ThemeState = {
    theme: {
        dark: Boolean;
    }
};
export type Item = {
    id: number;
    name: string;
    items: {
      id: number;
      img: string;
      title: string;
    }[];
  }