import React, { Fragment } from "react";
import HorizontalSidebarWrapper from "./hor-sidebar.style";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import { HorizontalSidebarData } from "util/data/sidebar";
import IntlMessages from "util/intlMessages";
import { iconDemo } from "helper/constant";
import { ProfileLockScreen } from "helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "redux/auth/actions";
import { withRouter } from "react-router-dom";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
const { logout } = AuthActions;

const HorizontalSidebar = props => {
  const userSignout = () => {
    props.logout();
  };

  return (
    <HorizontalSidebarWrapper {...props}>
      <div className="horizontal-nav">
        <div className="hor_menu-icon">
          <i
            className="fas fa-bars"
            onClick={() => props.drawerMiniMethod()}
          ></i>
        </div>
        <div
          className="nav_logo fs-16 bold-text"
          onClick={() => props.history.push("/")}
        >
          <img className="hor_logo" src={iconDemo} alt="logo" />
          OE ADMIN
        </div>
        {HorizontalSidebarData.map((nav, i) => {
          return (
            <Fragment key={i}>
              {!nav.hasOwnProperty("child") ? (
                <NavLink to={nav.routepath} className="hor_nav-link text-upper">
                  <div className="mr-8">
                    <i className={nav.iconClass}></i>
                  </div>
                  <IntlMessages id={nav.name} />
                </NavLink>
              ) : (
                <NavMenu {...props} data={nav} index={i} />
              )}
            </Fragment>
          );
        })}
        <div className="main-screen-profile">
          <div id="profile">
            <img className="hor_profile" src={ProfileLockScreen} alt="notify" />
          </div>
          <UncontrolledPopover
            className="roy-menu"
            innerClassName="roy-inner-content"
            placement="top-start"
            target="profile"
            trigger="legacy"
          >
            <PopoverBody>
              <div
                className="roy-menu-list"
                onClick={() => props.history.push("/profile")}
              >
                My Profile
              </div>
              <div className="roy-menu-list">Settings</div>
              <div className="roy-menu-list" onClick={userSignout}>
                Logout
              </div>
            </PopoverBody>
          </UncontrolledPopover>
        </div>
        <div className="pl-10">
          <button
            onClick={props.layoutSettingDrawerToggle}
            className="top-header-icon"
          >
            <i className="fas fa-th-large"></i>
          </button>
        </div>
      </div>
    </HorizontalSidebarWrapper>
  );
};

export default compose(
  withRouter,
  connect(
    null,
    { logout }
  )
)(HorizontalSidebar);
