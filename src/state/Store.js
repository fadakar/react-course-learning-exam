import {configureStore} from "@reduxjs/toolkit";
import CourseReducer from './course/course-slice'
import TeacherReducer from "./teacher/teacher-slice";
import HardnessReducer from "./hardness/hardness-slice";
import WishReducer from "./wish/wish-slice";
import CategoryReducer from "./category/category-slice"

const Store = configureStore({
    reducer: {
        teachers: TeacherReducer,
        hardnesses: HardnessReducer,
        course: CourseReducer,
        wish: WishReducer,
        categories: CategoryReducer,
    }
});

export default Store;