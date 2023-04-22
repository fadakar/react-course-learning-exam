import React from 'react';
import {NavLink} from "react-router-dom";

function LayoutHeader(props) {
    return (
        <>
            <div className="header dark-text shadow-sm">
                <div className="container">
                    <nav id="navigation" className="navigation navigation-landscape">
                        <div className="nav-header">
                            <a className="nav-brand" href="#">
                                <img src="assets/img/logo.png" className="logo" alt=""/>
                            </a>
                            <div className="nav-toggle"></div>
                            <div className="mobile_nav">
                                <ul>
                                    <li>
                                        <a className="crs_yuo12 w-auto text-white theme-bg">
                                            <span className="embos_45"><i
                                                className="fas fa-sign-in-alt ml-1 rotate-img"></i>ورود</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-menus-wrapper">
                            <ul className="nav-menu">
                                <li>
                                    <NavLink to={'/'}>
                                        خانه
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/course'}>
                                        دروه های اموزشی
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>
                                        درباره ما
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to={'/profile/wish'}>
                                        لیست علاقمندی ها
                                    </NavLink>
                                </li>


                            </ul>

                            <ul className="nav-menu nav-menu-social align-to-left">

                                <li>
                                    <a href="#" className="alio_green" data-toggle="modal" data-target="#login">
                                        <i className="fas fa-sign-in-alt ml-1 rotate-img"></i><span
                                        className="dn-lg">ورود</span>
                                    </a>
                                </li>
                                <li className="add-listing theme-bg">
                                    <a href="signup.html" className="text-white">ثبت نام</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default LayoutHeader;