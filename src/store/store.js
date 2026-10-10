import { configureStore } from "@reduxjs/toolkit";
import { divarApi } from "@/services/divarApi";
import categoryReducer from "./categorySlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    [divarApi.reducerPath]: divarApi.reducer,
    category: categoryReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(divarApi.middleware),
});
