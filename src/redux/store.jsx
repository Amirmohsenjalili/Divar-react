import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './card'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
})