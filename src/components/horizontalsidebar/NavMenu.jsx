import React, { Fragment } from 'react';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import classNames from 'classnames'
import IntlMessages from "util/intlMessages";

const NavMenu = props => {
    const { data, index, location } = props
    const CurrentRoute = location.pathname;
    let childRoutes = [];

    if (data && data.child) {
        data.child.forEach(element => {
            if (element.hasOwnProperty('child')) {
                element.child.forEach(element2 => {
                    childRoutes.push(element2.routepath)
                });
            } else {
                childRoutes = data.child.map(a => a.routepath);
            }
        });
    }

    return (
        <div
            id={'menu' + index}
            className={classNames('hor_nav-link', childRoutes.includes(CurrentRoute) && 'active')}
        >
            <button
                type="button"
                className="topbar-trans-btn cursor-pointer flex-x center"
            >
                {
                    data.hasOwnProperty('iconClass') &&
                    <div className="mr-8">
                        <i className={data.iconClass}></i>
                    </div>
                }
                <IntlMessages id={data.name} />
                <div className="ml-8">
                    <i className="fas fa-caret-down"></i>
                </div>
            </button>
            <UncontrolledPopover 
                trigger="legacy" 
                placement="top-end" 
                target={'menu' + index} 
                className="hor_menu"
            >
                <PopoverBody>
                    <Fragment>
                        {
                            data.child.map((nav, i) => {
                                return (
                                    <Fragment key={i}>
                                        {
                                            !nav.hasOwnProperty('child') &&
                                            <div>
                                                <NavLink
                                                    to={nav.routepath}
                                                    className="hor_nav-link fs-14 medium-text"
                                                >
                                                    <IntlMessages id={nav.name} />
                                                </NavLink>
                                            </div>
                                        }
                                    </Fragment>
                                )
                            })

                        }
                    </Fragment>
                    <div className="flex-x">
                        {
                            data.child.map((nav, i) => {
                                return (
                                    <Fragment key={i}>
                                        {
                                            nav.hasOwnProperty('child') &&
                                            <div>
                                                <div className="menu_section mlr-10">
                                                    <div className="hor_heading">
                                                        <IntlMessages id={nav.name} />
                                                    </div>
                                                    <div className="pt-10">
                                                        {
                                                            nav.child.map((e, i) => {
                                                                return (
                                                                    <div key={i}>
                                                                        <NavLink
                                                                            to={e.routepath}
                                                                            className="hor_nav-link"
                                                                        >
                                                                            <IntlMessages id={e.name} />
                                                                        </NavLink>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    );
};

export default compose(
    withRouter,
)(NavMenu);