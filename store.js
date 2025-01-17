import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './src/slices/ProductSlice'
import categoriesReducer from './src/slices/CategorySlice'
const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
    },
});

export default store;
