import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import RoyTooltip from "components/common/RoyTooltip";

const defaultButton = props => <button {...props}>{props.children}</button>;

const Pagination = props => {
    const [visiblePages, setvisiblePages] = useState(null);
    const { PageButtonComponent = defaultButton, changeMethodFlag,  onPageChange, page, resetMethodFlag } = props;
    const activePage = props.page + 1;
    
    const getVisiblePages = useCallback((page, total) => {
        if (total < 7) {
            return filterPages([1, 2, 3, 4, 5, 6], total);
        } else {
            if (page % 5 >= 0 && page > 4 && page + 2 < total) {
                return [1, page - 1, page, page + 1, total];
            } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
                return [1, total - 3, total - 2, total - 1, total];
            } else {
                return [1, 2, 3, 4, 5, total];
            }
        }
    }, []);

    useEffect(() => {
        setvisiblePages(getVisiblePages(null, props.pages));
    }, [getVisiblePages, props.pages]);

    useEffect(() => {
        if(changeMethodFlag) {
            if (page === 0) {
                onPageChange(null);
                onPageChange(0);
            } else {
                onPageChange(0);
            }
            // resetMethodFlag();
        }
    }, [changeMethodFlag, onPageChange, page, resetMethodFlag]);

    const filterPages = (visiblePages, totalPages) => {
        return visiblePages.filter(page => page <= totalPages);
    };

    const changePage = page => {
        const activePage = props.page + 1;

        if (page === activePage) {
            return;
        }
        const visiblePages = getVisiblePages(page, props.pages);

        setvisiblePages(filterPages(visiblePages, props.pages));
        props.onPageChange(page - 1);
    };

    return (
        <div className="Table__pagination">
            <div className="Table__prevPageWrapper">
                <RoyTooltip id={`previous`} title={"Previous"} placement="left">
                    <div id={`previous`}>
                        <PageButtonComponent
                            className="Table__pageButton"
                            onClick={() => {
                                if (activePage === 1) return;
                                changePage(activePage - 1);
                            }}
                            disabled={activePage === 1}
                        >
                            {/* {props.previousText} */}
                            <i className="fas fa-backward"></i>
                        </PageButtonComponent>
                    </div>
                </RoyTooltip>
            </div>
            <div className="Table__visiblePagesWrapper">
                {visiblePages &&
                    visiblePages.map((page, index, array) => {
                        return (
                            <PageButtonComponent
                                key={page}
                                className={
                                    activePage === page
                                        ? "Table__pageButton Table__pageButton--active"
                                        : "Table__pageButton"
                                }
                                onClick={changePage.bind(null, page)}
                            >
                                {array[index - 1] + 2 < page
                                    ? `...${page}`
                                    : page}
                            </PageButtonComponent>
                        );
                    })}
            </div>
            <div className="Table__nextPageWrapper">
                <RoyTooltip id={`next`} title={"Next"} placement="right">
                    <div id={`next`}>
                        <PageButtonComponent
                            className="Table__pageButton"
                            onClick={() => {
                                if (activePage === props.pages) return;
                                changePage(activePage + 1);
                            }}
                            disabled={activePage === props.pages}
                        >
                            {/* {props.nextText} */}
                            <i className="fas fa-forward"></i>
                        </PageButtonComponent>
                    </div>
                </RoyTooltip>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    PageButtonComponent: PropTypes.any,
    onPageChange: PropTypes.func,
    previousText: PropTypes.string,
    nextText: PropTypes.string
};

export default Pagination;
