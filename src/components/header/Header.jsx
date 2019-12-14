import React from "react";
import HeaderWrapper from "./header.style";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import {
  friend1,
  friend2,
  friend3,
  people1,
  people2,
  people3,
  ProfileLockScreen
} from "helper/constant";
import { connect } from "react-redux";
import { compose } from "redux";
import AuthActions from "redux/auth/actions";
import { withRouter } from "react-router-dom";
import PopoverBlock from "./PopoverBlock";

const { logout } = AuthActions;

const Header = props => {
  const { drawerMiniMethod, mini, layoutSettingDrawerToggle } = props;

  const userSignout = () => {
    props.logout();
  };

  return (
    <HeaderWrapper {...props}>
      <div className="headerBack">
        <div className="flex-x align-center">
          <div className="drawer-handle-arrow">
            {mini ? (
              <button
                className="top-header-icon"
                onClick={() => drawerMiniMethod()}
              >
                <i className="fas fa-bars"></i>
              </button>
            ) : (
              <button
                className="top-header-icon"
                onClick={() => drawerMiniMethod()}
              >
                <i className="fas fa-bars"></i>
              </button>
            )}
          </div>
          <div
            className="mini-drawer-menu-icon"
            onClick={() => drawerMiniMethod()}
          >
            <i className="fas fa-bars" />{" "}
            <span className="app-name fs-16 bold-text">{"Roe"}</span>
          </div>
          {/* <div className="pl-10">
                        <button
                            id="mail"
                            className="top-header-icon"
                        >
                            <i className="far fa-envelope"></i>
                            <div className="button-badge fs-11 demi-bold-text">
                                3
                            </div>
                        </button>
                        <UncontrolledPopover placement="bottom-start" target="mail" className="header-popover" trigger="focus">
                            <PopoverBody className="mail-popover-body">
                                <div className="fs-13 bold-text mb-10">
                                    You have 3 mails.
                                </div>
                                <PopoverBlock
                                    people={friend1}
                                    name="Alex Woods"
                                    text="Hello, How are you ?"
                                    created="Just Now"
                                />
                                <PopoverBlock
                                    people={friend2}
                                    name="James Anderson"
                                    text="Please check your transaction"
                                    created="22nd July 2019"
                                />
                                <PopoverBlock
                                    people={friend3}
                                    name="Watson"
                                    text="You won price.."
                                    created="20th Jun 2019"
                                />
                            </PopoverBody>
                        </UncontrolledPopover>
                    </div> */}
          <div className="pl-10 flex-1">
            {/* <button id="notification" className="top-header-icon">
              <i className="far fa-bell"></i>
              <div className="button-badge fs-11 demi-bold-text">3</div>
            </button>
            <UncontrolledPopover
              placement="bottom-start"
              target="notification"
              className="header-popover"
              trigger="focus"
            >
              <PopoverBody className="mail-popover-body">
                <div className="fs-13 bold-text mb-10">
                  You have 3 Notifications.
                </div>
                <PopoverBlock
                  people={people1}
                  name="Juli Hacks"
                  text="Send You a message..."
                  created="Just Now"
                />
                <PopoverBlock
                  people={people2}
                  name="Scarlet JohnSon"
                  text="Like your status..."
                  created="22nd July 2019"
                />
                <PopoverBlock
                  people={people3}
                  name="Andrew Hales"
                  text="Tagged you in his status"
                  created="20th Jun 2019"
                />
              </PopoverBody>
            </UncontrolledPopover> */}
          </div>
          <div className="pl-10">
            <button className="top-header-icon">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="pl-10">
            <div id="profile">
              <img
                className="top-header-profile-class"
                src={ProfileLockScreen}
                alt="notify"
              />
            </div>
            <UncontrolledPopover
              className="roy-menu"
              innerClassName="roy-inner-content"
              placement="bottom-end"
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
            {/* <button
              onClick={layoutSettingDrawerToggle}
              className="top-header-icon"
            >
              <i className="fas fa-th-large"></i>
            </button> */}
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default compose(withRouter, connect(null, { logout }))(Header);
