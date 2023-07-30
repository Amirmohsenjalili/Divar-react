import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from '../features/cards/cardsSlice';
import categoryReducer from '../features/category/categorySlice';
import themeReducer from '../features/theme/themeSlice';

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