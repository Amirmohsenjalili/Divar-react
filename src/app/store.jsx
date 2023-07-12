import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from '../features/cards/cardsSlice'

// import logger from 'logger';

const store = configureStore({
    reducer: { cards: cardsReducer },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;