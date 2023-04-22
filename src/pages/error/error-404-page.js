import React from 'react';
import {Link} from "react-router-dom";

function Error404Page() {
    return (
        <section className="error-wrap">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-10">
                        <div className="text-center">

                            <img src="/assets/img/404.png" className="img-fluid" alt="" />
                                <p>شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                <Link to={'/'} className="btn theme-bg text-white btn-md" >بازگشت به خانه</Link>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Error404Page;