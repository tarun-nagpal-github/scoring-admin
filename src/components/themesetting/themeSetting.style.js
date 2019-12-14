import styled from "styled-components";

const ThemeSettingWrapper = styled.div`
  .themeSettingRightside {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 260px;
    display: block;
    color: #fff;
    font-weight: 200;
    z-index: 9;
    background-size: cover;
    overflow: hidden;
    background: white;
    background-position: center center;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);

    .theme-setting-title {
      color: black;
      font-size: 18px;
      padding: 15px;
      background-color: #f5f5f5;
      span {
        font-family: "muli-semi-bold";
      }
    }

    .alignment-radio {
      padding: 15px 20px;
      label {
        color: black;
      }
      .pretty.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {
        background: #5C258D !important;
      }
    }

    .themeSettingHeading {
      background: white;
      color: rgba(0,0,0,0.8);
      padding: 20px 15px;
      span {
        font-size: 20px;
        font-family: "muli-semi-bold";
      }
      .closeIcon {
        position: absolute;
        right: 25px;
        font-size: 16px;
        top: 24px;
        width: 28px;
        height: 28px;
        background-color: #f7f8fa;
        color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        border-radius: 4px;
        &:hover {
          background-color: #563c91;
          color: #fff;
        }
    }
  }

  .transparent-image {
    object-fit: cover;
    border-radius: 10px;
  }

  .theme-label {
    display: flex;
  }

  .first-span {
    display: block;
    height: 14px;
    width: 34px;
    border-radius: 9px;
    position: relative;
    background: aquamarine;
    right: -30px;
    top: 3px;
    margin-right: 15px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  }

  .main-panel, .navbar-fixed, .themeSettingRightside, .sidebar-wrapper {
    -webkit-transition-property: top,bottom,width;
    -o-transition-property: top,bottom,width;
    transition-property: top,bottom,width;
    -webkit-transition-duration: .1s,.1s,.2s;
    -o-transition-duration: .1s,.1s,.2s;
    transition-duration: .1s,.1s,.2s;
    -webkit-transition-timing-function: linear,linear,ease;
    -o-transition-timing-function: linear,linear,ease;
    transition-timing-function: linear,linear,ease;
    -webkit-overflow-scrolling: touch;
  }
  .themeChangeBlock {
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    color: black;
    flex-shrink: 0;
    flex-direction: column;
    margin-top: 10px;

    h4 {
      font-size: 16px;
      line-height: 1.3;
      margin-bottom: 0;
      padding: 0 15px;
      text-transform: capitalize;
    }

    .themeChangeBtnWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 15px 20px;

      button {
        width: 20px;
        height: 20px;
        display: flex;
        margin: 0 0 0 10px;
        border: 1px solid #e4e4e4;
        outline: 0;
        padding: 0;
        background: none;
        justify-content: center;
        position: relative;
        cursor: pointer;
        border-radius: 50%;

        &.languageSwitch {
          border: 0;
          width: 30px;
          height: auto;

          &.selectedTheme {
            &:before,
            &:after {
              top: 2px;
              left: ${props =>
                props["data-rtl"] === "rtl" ? "inherit" : "-3px"};
              right: ${props =>
                props["data-rtl"] === "rtl" ? "-3px" : "inherit"};
            }
          }
        }

        img {
          width: 100%;
        }

        &.selectedTheme {
          &:before {
            content: '';
            width: 15px;
            height: 2px;
            display: -webkit-inline-flex;
            display: -ms-inline-flex;
            display: inline-flex;
            background: #5C258D;
            position: absolute;
            top: 22px;
            left: 2px;
            right: ${props =>
              props["data-rtl"] === "rtl" ? "-2px" : "inherit"};
          }
        }
      }
    }
  }
`;

export default ThemeSettingWrapper;
