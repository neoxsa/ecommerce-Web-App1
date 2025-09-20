import { createSlice } from '@reduxjs/toolkit'

const inCart = JSON.parse(localStorage.getItem('products')) || []

const initialState = {
    products: inCart
}

export const product2Cart = createSlice({
    name: 'ProductToCart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            if (!Array.isArray(state.products)) {
                state.products = []
            }

            state.products.push({
                id: action.payload.id,
                image: action.payload.image,
                name: action.payload.name,
                qty: action.payload.qty,
                price: action.payload.price
            })

            localStorage.setItem('products', JSON.stringify(state.products))
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((item) => item.id.productId !== action.payload)
            localStorage.setItem('products', JSON.stringify(state.products))
        },

        updateQty: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.products.find((item) => item.id.productId === productId)

            if (item) {
                item.qty.quantity = quantity
                localStorage.setItem('products', JSON.stringify(state.products))
            }
        }
    }
})

export const { addProduct, removeProduct, updateQty } = product2Cart.actions
export default product2Cart.reducer