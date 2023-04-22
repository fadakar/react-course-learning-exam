import React from 'react';

function LayoutFooter(props) {
    return (
        <>
            <section className="theme-bg call_action_wrap-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="call_action_wrap">
                                <div className="call_action_wrap-head">
                                    <h3 className="font-2">آیا سوالی دارید؟</h3>
                                    <span>ما به شما کمک خواهیم کرد تا شغل و رشد خود را افزایش دهید.</span>
                                </div>
                                <a href="#" className="btn btn-call_action_wrap">امروز با ما تماس بگیرید</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <footer className="dark-footer skin-dark-footer style-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-5 col-md-5">
                                <div className="footer_widget">
                                    <img src="assets/img/logo-light.png" className="img-footer small mb-2" alt=""/>
                                    <h4 className="extream mb-3 font-2">آیا به کمک تیم پشتیبانی<br/>نیاز دارید؟</h4>
                                    <p>هر ماه با عضویت در خبرنامه ما از به‌روزرسانی‌ها، معاملات جدید، آموزش‌ها و
                                        تخفیف‌ها
                                        باخبر شوید.</p>
                                    <div className="foot-news-last">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="ایمیل"/>
                                            <div className="input-group-append">
                                                <button type="button"
                                                        className="input-group-text theme-bg b-0 text-light">عضویت
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-7 ml-auto">
                                <div className="row">

                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">صفحات</h4>
                                            <ul className="footer-menu">
                                                <li><a href="#">صفحه اصلی</a></li>
                                                <li><a href="#">درباره ما</a></li>
                                                <li><a href="#">خدمات</a></li>
                                                <li><a href="#">دوره های آموزشی</a></li>
                                                <li><a href="#">تماس با ما</a></li>
                                                <li><a href="#">لیست وبلاگ</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">تمام بخش ها</h4>
                                            <ul className="footer-menu">
                                                <li><a href="#">منو<span className="new">جدید</span></a></li>
                                                <li><a href="#">ویژگی های جذاب</a></li>
                                                <li><a href="#">المان ها<span className="new">جدید</span></a></li>
                                                <li><a href="#">نظرات کاربران</a></li>
                                                <li><a href="#">ویدئو</a></li>
                                                <li><a href="#">فوتر</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <div className="footer_widget">
                                            <h4 className="widget_title">لینک های مفید</h4>
                                            <ul className="footer-menu">
                                                <li><a href="#">درباره ما</a></li>
                                                <li><a href="#">وبلاگ</a></li>
                                                <li><a href="#">قیمت گذاری</a></li>
                                                <li><a href="#">ثبت نام</a></li>
                                                <li><a href="#">ورود به حساب</a></li>
                                                <li><a href="#">پشتیبانی <span className="update">بروزرسانی</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 text-center">
                                <p className="mb-0">© 2022 قالب SkillUp ارائه شده مدرس <a href="https://rtl-theme.com/">راست
                                    چین</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default LayoutFooter;