import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import Product2CartReducer from '../features/productToCart'


const store = configureStore({
    reducer: {
        // Api
        [apiSlice.reducerPath]: apiSlice.reducer,

        ProductToCart: Product2CartReducer

    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(apiSlice.middleware)
    )

})
setupListeners(store.dispatch);

export default store;