import React, {useEffect, useState} from 'react';
import {CourseList} from "../../../components";
import {useDispatch, useSelector} from "react-redux";
import {setCourse, setCourseLoading} from "../../../state/course/course-slice";
import {Pagination} from "../../../components/elements";
import {CourseFilter} from "../../../components/course";
import Api from "../../../utils/api";
import {setHardness} from "../../../state/hardness/hardness-slice";
import {setTeacher} from "../../../state/teacher/teacher-slice";
import {useNavigate, useParams} from "react-router-dom";


function CourseListPage() {
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate();
    const {data: courseList, isLoading: courseListIsLoading} = useSelector(state => state.course);
    const {data: teachers} = useSelector(state => state.teachers);
    const {data: hardnesses} = useSelector(state => state.hardnesses);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(1);
    const [perPage, setPerPage] = useState(2);
    const [sort, setSort] = useState();
    const [filterState, setFilterState] = useState({});

    if (params.searchTerm) {
        filterState.searchTerm = params.searchTerm;
    }
    useEffect(() => {
        setCurrentPage(1);
    }, [perPage, filterState])

    useEffect(() => {
        dispatch(setCourseLoading(true));
        let url = `/courses?_page=${currentPage}&_limit=${perPage}&${sort}`;

        if (filterState.searchTerm?.trim())
            url += `&q=${filterState.searchTerm}`;
        if (filterState.teachers?.length > 0)
            for (let teacherId of filterState.teachers)
                url += `&teacher.id=${teacherId}`;
        if (filterState.hardnesses?.length > 0)
            for (let hardnessId of filterState.hardnesses)
                url += `&hardness=${hardnessId}`;

        Api.get(url)
            .then(response => {
                setTotalCount(response.headers['x-total-count'])
                dispatch(setCourse(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(setCourseLoading(false));
            });
    }, [dispatch, currentPage, perPage, filterState, sort]);

    useEffect(() => {
        Api.get('/hardnesses')
            .then((response) => dispatch(setHardness(response.data)))
    }, [dispatch]);

    useEffect(() => {
        Api.get('/teachers')
            .then((response) => dispatch(setTeacher(response.data)))
    }, [dispatch]);


    const onFilterHandler = (filters) => {
        setFilterState(filters);
        if (filters.searchTerm !== params.searchTerm)
            navigate(`/course/${filters.searchTerm}`);
    }


    return (
        <section className="gray">
            <div className="container">
                <div className="row">

                    <div className="py-5 py-xl-0 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="bg-white sidebar-widgets p-4">
                            <CourseFilter
                                searchTerm={params.searchTerm}
                                teachers={teachers}
                                hardnesses={hardnesses}
                                onFilter={onFilterHandler}/>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="short_wraping">
                                    <div className="row m-0 align-items-center justify-content-between">

                                        <div className="col-lg-4 col-md-5 col-sm-12  col-sm-6">
                                            <div className="shorting_pagination_laft">
                                                <h6 className="m-0">نمایش
                                                    <span className="px-2">
                                                        {(currentPage * perPage) - perPage + 1}-{(currentPage) * perPage}
                                                    </span>
                                                    از

                                                    <span className="px-2">{totalCount}</span>
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-md-7 col-sm-12 col-sm-6">
                                            <div className="dlks_152">
                                                <div className="shorting-right ml-2">
                                                    <label>مرتب سازی :</label>
                                                    <select className="form-control"
                                                            onChange={(e) => setSort(e.target.value)}>
                                                        <option value="_sort=id&_order=desc">
                                                            لطفا انتخاب کنید...
                                                        </option>
                                                        <option value="_sort=price&_order=asc">
                                                            قیمت صعودی
                                                        </option>
                                                        <option value="_sort=price&_order=desc">
                                                            قیمت نزولی
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="lmk_485">
                                                    <select className="form-control"
                                                            value={perPage}
                                                            onChange={(e) => setPerPage(e.target.value)}>
                                                        <option value="2">2</option>
                                                        <option value="5">5</option>
                                                        <option value="10">10</option>
                                                        <option value="25">25</option>
                                                        <option value="50">50</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">

                            <CourseList courses={courseList} isLoading={courseListIsLoading} colcount={2}/>

                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={currentPage}
                                    totalCount={totalCount}
                                    pageSize={perPage}
                                    onPageChange={(pageNumber) => {
                                        setCurrentPage(pageNumber)
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default CourseListPage;