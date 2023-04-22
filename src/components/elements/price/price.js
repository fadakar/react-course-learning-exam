import React from 'react';

function Price({value}) {

    const formatPrice = (price) => {
        return price.toLocaleString();
    };

    return (
        <>
            {formatPrice(value)}
        </>
    );
}

export default Price;