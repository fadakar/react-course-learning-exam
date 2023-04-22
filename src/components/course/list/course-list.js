import {CourseGridSingleBox} from "../index";
import {Spinner} from "react-bootstrap";

function CourseList({courses, isLoading, colcount}) {
    let colClasses = 'col-xl-4 col-lg-4 col-md-6 col-sm-12';
    if (colcount == 2) {
        colClasses = 'col-xl-6 col-lg-6 col-md-6 col-sm-12';
    }

    if (isLoading) {
        return (
            <h4>
                در حال بارگزاری ...
            </h4>
        );
    } else {
        return courses.map((course) => {
            return (
                <div className={colClasses} key={course.id}>
                    <CourseGridSingleBox course={course}/>
                </div>
            );
        });
    }

}

export default CourseList;