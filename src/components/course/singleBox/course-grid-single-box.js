import React from 'react';
import {Link} from "react-router-dom";
import {CourseHardness} from "../../../components";
import {Price} from "../../../components";

function CourseGridSingleBox({course}) {
    return (
        <div className="crs_grid shadow_none brd " >
            <div className="crs_grid_thumb">
                    <img src={`/${course.image}`} className="img-fluid rounded" alt=""/>
            </div>
            <div className="crs_grid_caption" style={{minHeight: '150px'}}>
                <div className="crs_flex align-items-center">
                    <div className="crs_fl_first">
                        <div className="crs_cates cl_4"><span>{course.category.title}</span></div>
                    </div>
                    <div className="crs_fl_last">
                        <ul className="d-flex justify-content-between align-items-center m-0">
                            <li className="ml-2">
                                <i className="fa fa-clock text-danger px-2"></i>
                                <span>
                                    {course.duration}&nbsp;
                                    ساعت
                                </span>
                            </li>
                            <li>
                                <CourseHardness value={course.hardness} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="crs_title pt-4">
                    <h5>
                        {course.title}
                    </h5>
                </div>
            </div>

            <div className="crs_grid_foot">
                <div className="crs_flex">
                    <div className="crs_fl_first">
                        <div className="crs_tutor">
                            <div className="crs_tutor_name">
                                {course.teacher.fullname}
                            </div>
                        </div>
                    </div>
                    <div className="crs_fl_last">
                        <div className="crs_price"><h2><span
                            className="theme-cl"><Price value={course.price}/></span><span
                            className="currency">تومان</span></h2></div>
                    </div>
                </div>
            </div>

            <div className="crs_grid_foot">
                <div className="crs_flex">
                    <Link to={`/course/${course.id}/show`} className="btn btn-success btn-block">
                        اطلاعات بیشتر
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default CourseGridSingleBox;