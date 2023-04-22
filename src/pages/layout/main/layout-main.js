import React from 'react';
import {LayoutHeader} from "../index";
import LayoutFooter from "../footer/layout-footer";

function LayoutMain({children}) {
    return (

        <>
            <div id="main-wrapper">
                <LayoutHeader/>
                <div className="mt-5">
                    {children}
                </div>
                <LayoutFooter/>
            </div>

            <script src="/assets/js/jquery.min.js"></script>
            <script src="/assets/js/popper.min.js"></script>
            <script src="/assets/js/bootstrap.min.js"></script>
            <script src="/assets/js/select2.min.js"></script>
            <script src="/assets/js/slick.js"></script>
            <script src="/assets/js/moment.min.js"></script>
            <script src="/assets/js/daterangepicker.js"></script>
            <script src="/assets/js/summernote.min.js"></script>
            <script src="/assets/js/metisMenu.min.js"></script>
            <script src="/assets/js/custom.js"></script>

        </>
    );
}

export default LayoutMain;