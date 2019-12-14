import styled from "styled-components";

const GlobalWrapper = styled.div`
    .react-strap-doc {
        table, .form-control-plaintext {
            color: ${props => props.layoutTheme.textColor};
        }
        .badges-heading-block {
            h1,h2,h3,h4,h5,h6 {
                color: ${props => props.layoutTheme.headingColor} !important;
            }
        }
        .form-control-plaintext {
            color: ${props => props.layoutTheme.headingColor} !important;
        }
        legend, .doc-title {
            color: ${props => props.layoutTheme.headingColor};    
        }

        .doc-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .doc-description {
            font-size: 14px;
            font-weight: 500;
            color: ${props => props.layoutTheme.textColor};    
        }

        .inline-strap-form {
            @media (max-width: 575.98px) {
                .form-group {
                    width: 100%;
                }
                button {
                    display: block;
                    width: 100%;
                    margin-top: 10px;
                }
                input {
                    width: 100%;
                }
            }
        }
        
        .jumbotron {
            padding: 1rem 1rem !important;
            margin-bottom: 15px;
        }
    }

    .theme-color {
        color: ${props => props.layoutTheme.textColor};
    }

    .intro-detail {
        font-family: 'muli-medium';
        font-size: 15px;
        color: ${props => props.layoutTheme.textColor};
    }

    .sub-heading {
        color: ${props => props.layoutTheme.headingColor};
    }

    .mini-text {
        font-size: 12px!important;
        font-weight: 400;
        color: ${props => props.layoutTheme.textColor};
        margin: -10px 0 5px;
    }

    .global-hash-title {
        color: ${props => props.layoutTheme.headingColor};
    }

    .checkbox-text {
        label {
            color: ${props => props.layoutTheme.textColor};
        }
    }

    .custom-react-table-theme-class, .calender-back-class {
        background-color: ${props => props.layoutTheme.cardBackground};
        color: ${props => props.layoutTheme.textColor};
        .pagination-bottom {
            button {
                color: ${props => props.layoutTheme.textColor};
            }
        }
    }

    .Page-title {
        .title {
            // color: ${props =>
              (props.sidebarTheme.themeName === "themedefault" ||
                props.sidebarTheme.themeName === "theme2" ||
                props.sidebarTheme.themeName === "theme4") &&
              props.layoutTheme.themeName === "theme6" &&
              props.layoutTheme.headingColor} !important;
            color:  ${props => props.topbarTheme.textColor}
        }
        span {
            font-family: "muli-bold";
            letter-spacing: 1px;
            font-size: 18px;
        }
    }

    .Profile-component {
        // color: ${props => props.layoutTheme.textColor};
        .profile-header-panel {
            color: ${props => props.layoutTheme.headingColor};
        }
        .profile-right-shade {
            background-color: ${props => props.layoutTheme.cardBackground};
            .feed-card, .work-body  {
                background-color: white;
            }
        }
    }

    .header-absolute-part {
        position: absolute;
        z-index: -1;
        top: 64px;
        left: 0;
        width: 100%;
        height: 185px;
        // background-color: #03a9f4 !important;
        z-index: 0;
        background: ${props => props.topbarTheme.backgroundColor};
    }

    .route-height {
        padding: 15px;
        @media  only screen and (max-width: 575.98px) {
            padding: ${props =>
              props.themeSetting.toolbarDisplayValue !== "show"
                ? "15px 0"
                : "0"};
        }
    }

    .map-block {
        height: calc(100vh - 300px);
        width: 100%;
    }

    .map-marker-icon {
        font-size: 40px;
        position: absolute;
        color: #161B1D;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .border-top-radius {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .border-bottom-radius {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .roe-box-shadow {
        // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        // 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        // border: 1px solid rgba(0, 0, 0, 0.125);
        box-shadow: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "0 0 0 0 rgba(90, 113, 208, 0.11), 0 4px 16px 0 rgba(167, 175, 183, 0.33);"
            : "0 0 0 0 #181a27"}
            border: ${props =>
              props.layoutTheme.themeName !== "theme6" &&
              props.layoutTheme.themeName !== "theme7"
                ? "1px solid #dde4eb"
                : "none"}
    }

    .roe-card-style {
        box-shadow: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "0 0 0 0 rgba(90, 113, 208, 0.11), 0 4px 16px 0 rgba(167, 175, 183, 0.33);"
            : "0 0 0 0 #181a27"}
          border: ${props =>
            props.layoutTheme.themeName !== "theme6" &&
            props.layoutTheme.themeName !== "theme7"
              ? "1px solid #dde4eb"
              : "none"}
        background-color: ${props => props.layoutTheme.cardBackground};
        border-radius: 6px;
        transition: all .2s;
        // border: 1px solid rgba(0, 0, 0, 0.125);
        label {
            color: ${props => props.layoutTheme.textColor};
        }

        .hash {
            font-family: "muli-semi-bold";   
            color: #563c91;
            display:none;
        }

        .roe-card-header {
            padding: 15px 24px;
            .my-title {
                font-family: "muli-semi-bold";    
            }
            font-family: "muli-semi-bold";
            font-size: 18px;
            color: ${props => props.layoutTheme.headingColor};
        }

        .roe-card-body {
            padding: 0 24px 24px;
            .prism-code {
                margin-bottom: 0px;
            }

            .roe-card-description {
                font-size: 15px;
                margin-bottom: 15px;
                font-weight: 500;
                color: ${props => props.layoutTheme.textColor};
            }
        }
    }

    .react-strap-doc {
        .new-page-title {
            margin: -15px -30px 15px;
            @media (max-width: 575.98px) {
                margin: 0px -15px 0;
            }
            .Page-title {
                padding-left: 15px;
            }
        }
        .custom-breadcumb {
            .breadcrumb {
                margin: 0;   
            }
        } 
    }

    .custom-breadcumb {
        .breadcrumb {
            padding: 0 15px;
            font-weight: 600;
            margin-bottom: 0;
            // border: 1px solid rgba(0, 0, 0, 0.125);
            font-size: 14px;
            text-transform: capitalize;
            background-color: transparent;
            border-radius: 6px;
            // box-shadow: 0 0.46875rem 2.1875rem rgba(0,0,0,0.03), 0 0.9375rem 1.40625rem rgba(0,0,0,0.03), 0 0.25rem 0.53125rem rgba(0,0,0,0.05), 0 0.125rem 0.1875rem rgba(0,0,0,0.03);
            display: flex;
            align-items: center;
            margin: 0px !important;
        }

        .breadcrumb-item.active {
            color: ${props => props.topbarTheme.breadCumbActiveColor};
        }

        .breadcrumb-item+.breadcrumb-item::before {
            content: '>';
            color: ${props => props.topbarTheme.textColor}
            // color: ${props =>
              (props.sidebarTheme.themeName === "themedefault" ||
                props.sidebarTheme.themeName === "theme2" ||
                props.sidebarTheme.themeName === "theme7") &&
              props.layoutTheme.themeName === "theme6"
                ? props.layoutTheme.headingColor
                : props.sidebarTheme.activeRouteBackColor} !important;
        }

        .breadcumb-color {
            color: ${props => props.topbarTheme.textColor}
            // color: ${props =>
              (props.sidebarTheme.themeName === "themedefault" ||
                props.sidebarTheme.themeName === "theme2" ||
                props.sidebarTheme.themeName === "theme7") &&
              props.layoutTheme.themeName === "theme6"
                ? props.layoutTheme.headingColor
                : props.sidebarTheme.activeRouteBackColor} !important;
        }
    }

    .theme-choose-side-block {
        height: 180px;
        width: 80px; 
        margin: 10px;
    }

    .theme-choose-header-block {
        height: 30px;
        margin: 10px;
    }

    .theme-choose-layout-block {
        height: 100px;
        margin: 10px;
    }

    .theme-choose-footer-block {
        height: 30px;
        margin: 10px;
    }

    .roy-round-icon {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color:  ${props =>
          props.topbarTheme.buttonBackColor} !important;
        i {
            font-size: 18px;
            color: ${props => props.topbarTheme.textColor} !important;
        }
    }

    .widget-dark-color {
        color: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "#424650"
            : "#fff"} !important; 
    }

    .widget-light-grey-color {
        color: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "#6c757d"
            : "#949ba2"} !important; 
    }

    .widget-grey-color {
        color: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "#575d78 "
            : "#949ba2"} !important; 
    }

    .new-page-title {
        background: ${props => props.topbarTheme.backgroundColor};
        margin: -15px;
        padding: 25px 15px;
        margin-bottom: 30px;
        @media (max-width: 575.98px) {
            margin: 0px 0px 15px;
            padding: 25px 0px;
        }
    }

    .top-header-icon {
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
        width: 35px;
        height: 35px;
        border: 0;
        transition: all 0.3s ease-in;
        background: ${props => props.topbarTheme.buttonBackColor};
        color: ${props => props.topbarTheme.textColor};
        display: flex !important;
        align-items: center;
        justify-content: center;
        position: relative;
        .button-badge {
            background: ${props => props.topbarTheme.badgeBackColor};
            color: ${props => props.topbarTheme.badgeTextColor};
            width: 20px;
            height: 20px;
            position: absolute;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            top: -6px;
            right: -8px;
        }
        &:focus {
            outline: 0;
        }
        @media  only screen and (max-width: 575.98px) {
            width: 32px;
            height: 32px;
            padding: 6px;
            margin-top: 2px;
        }
        i {
            font-size: 16px;
            @media  only screen and (max-width: 575.98px) {
                font-size: 13px;
            }
        }
    }

    .roe-shadow-2 {
        border-radius: 6px;
        box-shadow: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "0 0 0 0 rgba(90, 113, 208, 0.11), 0 4px 16px 0 rgba(167, 175, 183, 0.33);"
            : "0 0 0 0 #181a27"}
        border: ${props =>
          props.layoutTheme.themeName !== "theme6" &&
          props.layoutTheme.themeName !== "theme7"
            ? "1px solid #dde4eb"
            : "none"}
    }
`;

export default GlobalWrapper;
