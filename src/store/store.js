import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from '../services/rtkQuery';
// import { cardsDetailsApi } from '../services/rtkQueryDitals';
import categoryReducer from './category/categorySlice';
import themeReducer from './theme/themeSlice';

// import logger from 'logger';

const store = configureStore({
    reducer: {
         [cardsApi.reducerPath]: cardsApi.reducer,
        //  [cardsDetailsApi.reducerPath]: cardsDetailsApi.reducer,
         category: categoryReducer, 
         theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(cardsApi.middleware)
    // .concat(cardsDetailsApi.middleware)
})

export default store;