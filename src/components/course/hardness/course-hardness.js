import React from 'react';

function CourseHardness({value}) {
    if (value === 2) {
        return (
            <>
                <i className="fa fa-signal text-warning px-2"></i>
                <span>پیشرفته</span>
            </>
        );
    } else if (value === 3) {
        return (
            <>
                <i className="fa fa-signal text-danger px-2"></i>
                <span>حرفه ای</span>
            </>
        );
    } else {
        return (
            <>
                <i className="fa fa-signal text-info px-2"></i>
                <span>مقدماتی</span>
            </>
        );
    }

}

export default CourseHardness;