import styled from "styled-components";
import { palette } from "styled-theme";

const LayoutSettingWrapper = styled.div`
  .layoutSetting {
    position: fixed;
    top: 0px;
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
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);

    .themeSettingHeading {
      background: ${palette("primary", 0)};
      padding: 20px 30px;
      font-size: 20px;
      .closeIcon {
        position: absolute;
        right: 25px;
        font-size: 20px;
        top: 24px;
      }
    }

    .setting-wrapper {
      color: #000;
      padding: 2rem;
      overflow: auto;
      max-height: 100%;
    }

    .main-panel,
    .navbar-fixed,
    .layoutSetting,
    .sidebar-wrapper {
      -webkit-transition-property: top, bottom, width;
      -o-transition-property: top, bottom, width;
      transition-property: top, bottom, width;
      -webkit-transition-duration: 0.1s, 0.1s, 0.2s;
      -o-transition-duration: 0.1s, 0.1s, 0.2s;
      transition-duration: 0.1s, 0.1s, 0.2s;
      -webkit-transition-timing-function: linear, linear, ease;
      -o-transition-timing-function: linear, linear, ease;
      transition-timing-function: linear, linear, ease;
      -webkit-overflow-scrolling: touch;
    }

    .best-theme-block {
      background: rgba(0, 0, 0, 0.035);
      padding: 10px;
      margin-top: 10px;
      position: relative;
      cursor: pointer;
      .demo-image {
        width: 100%;
        border: 3px solid #4389a2;
        border-radius: 3px;
      }
      .image-overlay {
        display: none;
      }
      &:hover {
        .image-overlay {
          display: flex;
          position: absolute;
          z-index: 9;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.3);
          overflow-y: auto;
          overflow-x: hidden;
          text-align: center;
          opacity: 1;
          transition: opacity 1s;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default LayoutSettingWrapper;
