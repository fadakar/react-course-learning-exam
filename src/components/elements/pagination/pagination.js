import React from 'react';
import classnames from 'classnames';
import {DOTS, usePagination} from "../../../utils/usePagination";

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={classnames('pagination p-center', {[className]: className})}>
            <li className={classnames('page-item', {disabled: currentPage === 1})} onClick={onPrevious}>
                <a className="page-link" aria-label="Previous">
                    <span className="ti-arrow-right"></span>
                    <span className="sr-only">قبل</span>
                </a>
            </li>
            {paginationRange.map((pageNumber, idx) => {
                if (pageNumber === DOTS) {
                    return <li key={idx} className="page-item"><a className="page-link" href="#">...</a></li>
                }
                return (
                    <li key={idx} className={classnames('page-item', {active: pageNumber === currentPage})}
                        onClick={() => onPageChange(pageNumber)}>
                        <a className="page-link">{pageNumber}</a>
                    </li>
                );
            })}
            <li className={classnames('page-item', {disabled: currentPage === lastPage})} onClick={onNext}>
                <a className="page-link" href="#" aria-label="Next">
                    <span className="ti-arrow-left"></span>
                    <span className="sr-only">بعد</span>
                </a>
            </li>
        </ul>
    );
};

export default Pagination;