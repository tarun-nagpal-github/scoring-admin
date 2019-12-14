import styled from "styled-components";

const HorizontalSidebarWrapper = styled.div`
  .hor_menu-icon {
    display: none;
    @media (max-width: 991.98px) {
      display: flex;
      i {
        color: ${props => props.topbarTheme.textColor};
        margin-right: 10px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .horizontal-nav {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    transition-duration: 3s;
    transition-property: left, right;
    background: ${props => props.topbarTheme.backgroundColor};
    padding: 8px 10px;
    @media only screen and (max-width: 575.98px) {
      padding: 15px 10px;
    }

    .sub-menu {
      position: absolute;
      top: 61px;
      z-index: 999;
      background: #ffffff;
      border-top: none;
      border-radius: 4px;
      color: black;
    }

    .hor_nav-link {
      color: #ffffff;
      line-height: 1;
      height: 40px;
      padding: 0 15px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      text-decoration: none;
      margin: 0 10px;
      border-radius: 6px;
      transition: all 0.3s ease-in;
      span {
        font-size: 13px;
        font-family: "muli-bold";
      }
      .topbar-trans-btn {
        text-transform: uppercase;
        color: ${props => props.topbarTheme.textColor};
      }
      color: ${props => props.topbarTheme.textColor};
      // &:hover {
      //   span,
      //   i {
      //     color: ${props => props.topbarTheme.breadCumbActiveColor};
      //   }
      // }
      @media (min-width: 767px) and (max-width: 991.98px) {
        padding: 0 10px;
        height: 40px;
        span {
          font-size: 13px;
        }
      }
      @media (max-width: 991.98px) {
        display: none;
      }
    }

    .active {
      background-color: ${props => props.topbarTheme.horSidebarActiveBackColor};
      color: ${props => props.topbarTheme.horSidebarActiveTextColor};
      .topbar-trans-btn {
        color: ${props => props.topbarTheme.horSidebarActiveTextColor};
      }
      &:hover {
        span,
        i {
          color: ${props => props.topbarTheme.horSidebarActiveTextColor};
        }
      }
    }

    .topbar-trans-btn {
      background-color: transparent !important;
      outline: 0;
      border: 0;
      padding: 0;
      margin: 0;
      box-shadow: none;
      &:focus {
        box-shadow: none;
      }
    }
  }

  .nav_logo {
    .hor_logo {
      width: 35px;
    }
    flex: 1;
    color: ${props => props.topbarTheme.textColor};
    @media (min-width: 767px) and (max-width: 991.98px) {
      font-size: 16px !important;
      .hor_logo {
        width: 25px;
      }
    }
    @media (max-width: 991.98px) {
      font-size: 16px !important;
      .hor_logo {
        width: 25px;
      }
    }
  }

  .hor_profile {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    @media (min-width: 767px) and (max-width: 991.98px) {
      width: 35px;
      height: 35px;
    }
    @media (max-width: 991.98px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export default HorizontalSidebarWrapper;
