import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const TeacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        setTeacher: (state, action) => {
            state.data = action.payload;
        },
    }
});


export const {
    setTeacher
} = TeacherSlice.actions;
export default TeacherSlice.reducer;