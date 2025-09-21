import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import Product2CartReducer from '../features/productToCart'
import authReducer from '../features/authSlice'


const store = configureStore({
    reducer: {
        // Api reducer
        [apiSlice.reducerPath]: apiSlice.reducer,
        // Custom reducers
        ProductToCart: Product2CartReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(apiSlice.middleware)
    )
})
setupListeners(store.dispatch);

export default store;