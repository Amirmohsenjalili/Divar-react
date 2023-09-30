import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import themeReducer from './theme/themeSlice';
import {empitySplitApi} from 'src/services/rtkQuery';

const store = configureStore({
    reducer: {
         [empitySplitApi.reducerPath]: empitySplitApi.reducer,
         category: categoryReducer, 
         theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(empitySplitApi.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch