import { createSlice } from "@reduxjs/toolkit";

const categoryData = sessionStorage.getItem("category");

const initialState = {
    category: categoryData || "All"
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            sessionStorage.setItem("category", action.payload);
        },
    }
})

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;