import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import IntlMessages from "util/intlMessages";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const PageTitle = ({ title, sidebarTheme, className, breadCrumb }) => {
    return (
        <Fragment>
            <div className="new-page-title">
                <div className={classNames("Page-title", className)}>
                    <div className="title flex-1">
                        <IntlMessages id={title} />
                    </div>
                </div>
                {breadCrumb && (
                    <div>
                        <Breadcrumb className="custom-breadcumb">
                            {breadCrumb &&
                                breadCrumb.map((e, i) => {
                                    if (i === breadCrumb.length - 1) {
                                        return (
                                            <BreadcrumbItem key={i} active>
                                                <IntlMessages id={e.name} />
                                            </BreadcrumbItem>
                                        );
                                    } else {
                                        return (
                                            <BreadcrumbItem
                                                className="breadcumb-color"
                                                key={i}
                                            >
                                                <IntlMessages id={e.name} />
                                            </BreadcrumbItem>
                                        );
                                    }
                                })
                            }
                            {/* <div className="roy-round-icon mr-2 ml-auto">
                                <i className="fas fa-redo-alt"></i>
                            </div>
                            <div className="roy-round-icon">
                                <i className="fas fa-ellipsis-v"></i>
                            </div> */}
                        </Breadcrumb>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(PageTitle);
