import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, {payload}) => {
            state.data = payload;
        },
    }
});


export const {
    setCategories
} = CategorySlice.actions;
export default CategorySlice.reducer;