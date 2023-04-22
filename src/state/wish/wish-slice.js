import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

const WishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, {payload}) => {
            const isExist = state.data.filter(item => item.id === payload.id);
            if (isExist?.length > 0)
                return;

            state.data.push(payload);
        },

        removeFromWish: (state, {payload}) => {
            state.data = state.data.filter(item => item.id !== payload);
        },

    }
});


export const {
    addToWish,
    removeFromWish,
} = WishSlice.actions;
export default WishSlice.reducer;