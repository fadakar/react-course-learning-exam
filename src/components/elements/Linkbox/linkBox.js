import React from 'react';

function LinkBox({title, subtitle, href, icon}) {
    return (
        <div className="crs_cate_wrap style_2">
            <a href={href} className="crs_cate_box">
                <div className="crs_cate_icon"><i className={`fa ${icon}`}></i></div>
                <div className="crs_cate_caption"><span>{title}</span></div>
                <div className="crs_cate_count"><span>{subtitle}</span></div>
            </a>
        </div>
    );
}

export default LinkBox;