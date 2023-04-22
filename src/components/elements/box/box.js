import React from 'react';

function Box({children , icon}) {
    return (
        <div className="dro_140">
            { icon && <div className="dro_141 st-2"><i className={`fa ${icon}`}></i></div> }
            <div className="dro_142">
                {children}
            </div>
        </div>
    );
}

export default Box;