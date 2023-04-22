import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Api from "../../../utils/api";
import {CourseHardness, Price} from "../../../components";
import {addToWish} from "../../../state/wish/wish-slice";
import {ConfirmModal} from "../../../components/elements";
import SEO from "../../../utils/SEO";

function CourseSingleShow(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [courseState, setCourseState] = useState({});
    const [isLoadingState, setIsLoadingState] = useState(true);
    const [showModalState, setShowModalState] = useState(false);


    useEffect(() => {
        Api.get(`/courses/${params.id}`)
            .then(response => {
                setCourseState(response.data);
                setIsLoadingState(false);
            });
    }, [params]);

    const addToWishListHandler = () => {
        dispatch(addToWish(courseState));
        navigate('/profile/wish');
    }

    const registerConfirmModal = () => {
        setShowModalState(true);
    }

    const registerHandler = () => {
        // todo register this course
        console.log('start register course', courseState);
        setShowModalState(false);
    }

    const renderDetails = () => {
        return (
            <>
                <SEO
                    title={courseState.title}
                    description={courseState.title}
                    name="اسکیل اپ"
                    type="article"/>

                <div className="ed_detail_head bg-cover" style={{background: '#f4f4f4 url(assets/img/banner-3.jpg)'}}
                     data-overlay="8">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-7 col-md-7">
                                <div className="ed_detail_wrap light">
                                    <div className="crs_cates cl_1"><span>{courseState.category.title}</span></div>
                                    <div className="crs_cates cl_3"><span>پروژه محور</span></div>
                                    <div className="ed_header_caption">
                                        <h2 className="ed_title">{courseState.title}</h2>
                                        <ul>
                                            <li>
                                                <i className="ti-calendar"></i>
                                                {courseState.duration}
                                                &nbsp;
                                                ساعت
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ed_header_short">
                                        <p>طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                                            داشت
                                            که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
                                            مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
                                            موجود
                                            طراحی اساسا مورد استفاده قرار گیرد.</p>
                                    </div>

                                    <div className="ed_rate_info">
                                        <div className="star_info">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="review_counter">
                                            <strong className="high">4.7</strong> 3572 نظر ثبت شده
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="gray pt-3">
                    <div className="container">
                        <div className="row justify-content-end" style={{marginTop: '-320px'}}>

                            <div className="col-lg-4 col-md-12  order-lg-last">

                                <div className="ed_view_box style_3" style={{zIndex: 5}}>

                                    <div className="property_video sm">
                                        <div className="thumb">
                                            <img className="pro_img img-fluid w100"
                                                 src={`/${courseState.image}`}
                                                 alt={courseState.title}/>
                                        </div>
                                    </div>

                                    <div className="ed_view_price pl-4">
                                        <span>قیمت ویژه</span>
                                        <h2 className="theme-cl font-2">
                                            <Price value={courseState.price}/>
                                        </h2>
                                    </div>

                                    <div className="ed_view_short pl-4 pr-4 pb-2">
                                        <p>این سایت دارای مجوز رسمی از جمهوری اسلامی ایران بوده و به استناد نماد های
                                            زیر،
                                            خرید از این وب سایت کاملاً ایمن و تایید شده می باشد!</p>
                                    </div>

                                    <div className="ed_view_features half_list pl-4 pr-3">
                                        <span>ویژگی دوره</span>
                                        <ul>
                                            <li><i className="ti-user"></i>3 شرکت کننده</li>
                                            <li><i className="ti-time"></i>{courseState.duration} ساعت</li>
                                            <li>
                                                <CourseHardness value={courseState.hardness}></CourseHardness>
                                            </li>
                                            <li><i className="ti-cup"></i>ارائه مدرک</li>
                                        </ul>
                                    </div>
                                    <div className="ed_view_link">
                                        <button className="btn theme-light enroll-btn" onClick={registerConfirmModal}>
                                            عضویت
                                            <i className="ti-angle-left"></i>
                                        </button>

                                        <button className="btn theme-light enroll-btn" onClick={addToWishListHandler}>
                                            افزودن به علاقمندی
                                            <i className="fa fa-star"></i>
                                        </button>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <ConfirmModal isShow={showModalState}
                              onReject={() => setShowModalState(false)}
                              onAccept={() => registerHandler()}
                              btnAcceptTitle="بلی"
                              btnRejectTitle="لغو"
                              title='ثبت نام در دوره'>
                    ایا از ثبت نام در دوره
                    <strong>&nbsp;{courseState.title}&nbsp;</strong>
                    اطمینان دارید؟
                </ConfirmModal>
            </>
        );
    }

    const renderLoading = () => {
        return (
            <section className="pt-10 container text-center">
                <h2>در حال بارگزاری ....</h2>
            </section>
        );
    }

    return (
        <>
            {isLoadingState ? renderLoading() : renderDetails()}
        </>

    );
}

export default CourseSingleShow;