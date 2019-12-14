import styled from "styled-components";

const HeaderWrapper = styled.div`
  .headerBack {
    background: ${props => props.topbarTheme.backgroundColor};
    padding: 15px 10px;
    margin-left: -${props => (props.themeSetting.toolbarAlignValue === "above" && !props.mini ? props.drawerWidth : props.themeSetting.toolbarAlignValue === "above" && props.mini ? (props.miniDrawerWidth === props.drawerWidth ? "80px" : props.miniDrawerWidth) : "0px")};
    @media only screen and (max-width: 991.98px) {
      margin-left: 0px !important;
    }

    .drawer-handle-arrow {
      @media only screen and (max-width: 991.98px) {
        display: none;
      }
    }

    .mini-drawer-menu-icon {
      margin: 6px 0;
      justify-content: center;
      cursor: pointer;
      display: none;
      color: ${props => props.topbarTheme.textColor};
      @media only screen and (max-width: 991.98px) {
        display: block;
      }
      i {
        font-size: 20px;
        margin-right: 10px;
        position: relative;
        top: 2px;
      }
      .app-name {
        font-weight: 600;
      }
    }

    .top-header-profile-class {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
`;

export default HeaderWrapper;
