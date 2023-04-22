import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    selectedCourse: null,
}

const CourseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourse: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        },

        setCourseLoading: (state, action) => {
            state.isLoading = action.payload;
            if (state.isLoading) {
                state.data = [];
            }
        },

        setSelectedCourse: (state, action) => {
            state.selectedCourse = action.payload;
        }
    }
});


export const {
    setCourse,
    setCourseLoading,
    setSelectedCourse
} = CourseSlice.actions;
export default CourseSlice.reducer;