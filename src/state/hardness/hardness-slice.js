import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const HardnessSlice = createSlice({
    name: 'hardness',
    initialState,
    reducers: {
        setHardness: (state, action) => {
            state.data = action.payload;
        },
    }
});


export const {
    setHardness
} = HardnessSlice.actions;
export default HardnessSlice.reducer;