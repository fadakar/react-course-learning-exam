import './App.css';
import {LayoutMain} from "./pages/layout";
import {AboutPage, CourseListPage, Error404Page, HomePage, WishListPage} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CourseSingleShow from "./pages/course/single-show/course-single-show";
import {Provider} from "react-redux";
import Store from "./state/Store";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Provider store={Store}>
                <LayoutMain>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="course/:searchTerm?" element={<CourseListPage/>}/>
                        <Route path="course/:id/show" element={<CourseSingleShow/>}/>
                        <Route path="profile/wish" element={<WishListPage/>}/>
                        <Route path="*" element={<Error404Page/>}/>
                    </Routes>
                </LayoutMain>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
