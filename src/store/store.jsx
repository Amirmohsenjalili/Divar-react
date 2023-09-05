import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './cards/cardsSlice';
import categoryReducer from './category/categorySlice';
import themeReducer from './theme/themeSlice';

// import logger from 'logger';

const store = configureStore({
    reducer: {
         cards: cardsReducer,
         category: categoryReducer, 
         theme: themeReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;