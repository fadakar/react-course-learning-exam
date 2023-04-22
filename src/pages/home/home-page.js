import React, {useEffect, useRef} from 'react';
import {Box, CourseList, LinkBox} from "../../components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCourse, setCourseLoading} from "../../state/course/course-slice";
import Api from "../../utils/api";

function HomePage() {

    // const [courseList, setCourseList] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data: courseList, isLoading: courseListIsLoading} = useSelector(state => state.course);
    const searchInput = useRef('');


    useEffect(() => {
        dispatch(setCourseLoading(true));
        Api.get(`/courses?limit=6`)
            .then(response => {
                dispatch(setCourse(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(setCourseLoading(false));
            });
    }, []);


    const globalSearchHandler = () => {
        const searchTerm = searchInput.current.value;
        navigate(`/course/${searchTerm}`);
    }
    const globalSearchHandlerWithEnter = (e) => {
        if (e.key === 'Enter') {
            globalSearchHandler();
        }
    }

    return (
        <>
            <div className="hero_banner image-cover image_bottom h4_bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="simple-search-wrap text-right">
                                <div className="hero_search-2">
                                    <h1 className="banner_title mb-4 font-2">در مسیر پیشرفت، در کنار شما هستیم...</h1>
                                    <p className="font-lg mb-4">مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </p>
                                    <div className="input-group simple_search">
                                        <i className="fa fa-search ico"></i>
                                        <input ref={searchInput} type="text" className="form-control"
                                               onKeyDown={globalSearchHandlerWithEnter}
                                               placeholder="جستجو دوره آموزش..."/>
                                        <div className="input-group-append">
                                            <button className="btn theme-bg" type="button"
                                                    onClick={globalSearchHandler}>جستجو
                                            </button>
                                        </div>
                                    </div>
                                    <div className="crs_trio_info">
                                        <div className="crs_trio">
                                            <h4 className="ctr"><span className="rt_count">72</span> کاربر</h4>
                                            <span className="pol_title">موفق و راضی</span>
                                        </div>
                                        <div className="crs_trio">
                                            <h4 className="ctr"><span className="rt_count">100</span> مدرس</h4>
                                            <span className="pol_title">باتجربه و عالی</span>
                                        </div>
                                        <div className="crs_trio">
                                            <h4 className="ctr"><span className="rt_count">5.2</span> دوره</h4>
                                            <span className="pol_title">آموزش آنلاین</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="side_block">
                                <img src="assets/img/side-2.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="p-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="crp_box fl_color ovr_top">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Box icon={'fa-journal-whills'}>
                                            <h6>200+ دوره آموزشی</h6>
                                            <p>جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                                                گیرد.</p>
                                        </Box>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Box icon={'fa-business-time'}>
                                            <h6>پشتیبانی مادام العمر</h6>
                                            <p>جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                                                گیرد.</p>
                                        </Box>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Box icon={'fa-user-shield'}>
                                            <h6>800 هنرجو</h6>
                                            <p>جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                                                گیرد.</p>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="min">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h3 className="font-2">محورهای آموزشی <span className="theme-cl">منتخب</span></h3>
                                <p>با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <LinkBox href="#"
                                     title="برنامه نویسی"
                                     subtitle="22 دوره"
                                     icon="fa-code"
                            />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <LinkBox href="#"
                                     title="مهندسی نرم افزار"
                                     subtitle="22 دوره"
                                     icon="fa-window-restore"
                            />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <LinkBox href="#"
                                     title="طراحی و گرافیک"
                                     subtitle="6 دوره"
                                     icon="fa-photo-video"
                            />
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <LinkBox href="#"
                                     title="مالی و حسابداری"
                                     subtitle="12 دوره"
                                     icon="fa-photo-video"
                            />
                        </div>


                    </div>

                </div>
            </section>
            <div className="clearfix"></div>


            <section className="gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8">
                            <div className="sec-heading center">
                                <h3 className="font-2">دوره های آموزشی <span className="theme-cl">رایـگان</span></h3>
                                <p>با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <CourseList courses={courseList} isLoading={courseListIsLoading} colcount={3}/>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-8 mt-2">
                            <div className="text-center">
                                <Link to={'/course'} className="btn btn-md theme-bg-light theme-cl">
                                    همه دوره ها
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="imageblock">
                <div className="imageblock__content">
                    <div className="background-image-holder" style={{background: 'url(assets/img/side-1.jpg)'}}>
                        <img alt="image" src="assets/img/side-1.jpg"/>
                    </div>
                </div>
                <div className="container">

                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                            <div className="lmp_caption">
                                <h2 className="mb-3 font-2">معرفی بهترین مربیان در شهر شما</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                    برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                    می باشد.</p>
                                <div className="mb-3 ml-4 mr-lg-0 ml-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 mr-3">دسترسی کاملا مادام العمر</h6>
                                    </div>
                                </div>
                                <div className="mb-3 ml-4 mr-lg-0 ml-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 mr-3">بیش از 20 منبع قابل دانلود</h6>
                                    </div>
                                </div>
                                <div className="mb-3 ml-4 mr-lg-0 ml-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 mr-3">ارائه مدرک معتبر</h6>
                                    </div>
                                </div>
                                <div className="mb-3 ml-4 mr-lg-0 ml-lg-4">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <h6 className="mb-0 mr-3">آزمایشی رایگان 7 روز</h6>
                                    </div>
                                </div>
                                <div className="text-right mt-4"><a href="#" className="btn btn-md text-light theme-bg">شروع
                                    ثبت
                                    نام</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="imageblock pt-m-0">
                <div className="imageblock__content right">
                    <div className="background-image-holder" style={{background: 'url(assets/img/side-2.jpg)'}}>
                        <img alt="image" src="assets/img/side-1.jpg"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
                            <div className="lmp_caption">
                                <ol className="list-unstyled p-0">
                                    <li className="d-flex align-items-start my-3 my-md-4">
                                        <div
                                            className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center gray">
                                            <div className="position-absolute theme-cl h5 mb-0"><i
                                                className="fa fa-photo-video"></i></div>
                                        </div>
                                        <div className="mr-3 mr-md-4">
                                            <h4 className="font-2">آپلود دوره های آموزشی</h4>
                                            <p>
                                                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                                فارسی ایجاد کرد.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start my-3 my-md-4">
                                        <div
                                            className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center gray">
                                            <div className="position-absolute theme-cl h5 mb-0"><i
                                                className="fa fa-edit"></i>
                                            </div>
                                        </div>
                                        <div className="mr-3 mr-md-4">
                                            <h4 className="font-2">سفارشی سازی آسان</h4>
                                            <p>
                                                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                                فارسی ایجاد کرد.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start my-3 my-md-4">
                                        <div
                                            className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center gray">
                                            <div className="position-absolute theme-cl h5 mb-0"><i
                                                className="fa fa-question-circle"></i></div>
                                        </div>
                                        <div className="mr-3 mr-md-4">
                                            <h4 className="font-2">پرسش سوالات نامحدود</h4>
                                            <p>
                                                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                                                فارسی ایجاد کرد.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start my-3 my-md-4">
                                        <div
                                            className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center gray">
                                            <div className="position-absolute theme-cl h5 mb-0"><i
                                                className="fa fa-thumbs-up"></i></div>
                                        </div>
                                        <div className="mr-3 mr-md-4">
                                            <h4 className="font-2">100% رضایت کاربر</h4>
                                            <p>
                                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                                                متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="clearfix"></div>


        </>
    );
}

export default HomePage;