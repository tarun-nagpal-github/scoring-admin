import styled from "styled-components";
import { palette } from "styled-theme";
const SidebarWrapper = styled.div`
    .close-drawer-icon {
        display: none;
        position: absolute;
        right: 15px;
        top: 18px;
        font-size: 20px;
        z-index: 5
        cursor: pointer;
        color: ${props =>
          props.themeSetting.sidebarTransParentValue === "on"
            ? "white"
            : props.sidebarTheme.textColor} !important;
    }

    .sidebar-scrollbar-style {
        position: relative;
        display: block;
        width: 100%;
        cursor: pointer;
        border-radius: inherit;
        background-color: rgba(0, 0, 0, 0.2);
        height: 206px;
        transform: translateY(0px);
        background-color: ${props =>
          props.themeSetting.sidebarTransParentValue === "on"
            ? "white"
            : props.sidebarTheme.textColor} !important;
        opacity: 0.4;
    }

    .sidelist-header-name {
        text-transform: uppercase!important;
        font-weight: 700;
        display: flex;
        width: 100%;
        padding: .5rem 1rem;
        margin: 5px 10px 0;
        color: ${props =>
          props.themeSetting.sidebarTransParentValue === "on"
            ? "white"
            : props.sidebarTheme.textColor} !important;
        font-size: 13px;
        white-space: nowrap;
        position: relative;
        justify-content: space-between;
        align-items: center;
        span {
            opacity: 0.4;
        } 
        .new-update-tag {
            opacity: 1; 
            position: relative;
            right: 0 !important;
            text-transform: capitalize !important;
            line-height: 30px;
        }
    }

    .second-child-list-icon {
        line-height: 25px !important;
    }
    
    .sideBack{
        background: ${palette("primary", 1)};
        overflow: hidden;
        margin-bottom: ${props =>
          props.themeSetting.footerAlignValue === "above" ? "50px" : "0px"};
        margin-top: ${props =>
          props.themeSetting.toolbarAlignValue === "above" ? "65px" : "0px"};
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, .2);
    }

    .sidebar-wrapper{
    
        .nav-link {
            color: ${props =>
              props.themeSetting.sidebarTransParentValue === "on"
                ? "white"
                : props.sidebarTheme.textColor} !important;
            &:hover {
                padding-left: 22px !important;
            }
        }

        .arrow-sidebar {
            color: ${props =>
              props.themeSetting.sidebarTransParentValue === "on"
                ? "white"
                : props.sidebarTheme.textColor + "!important"}
        }
        
        .main-list {
            line-height: 30px;
            font-size: 15px;
            white-space: nowrap;
            position: relative;
            text-transform: capitalize;
            color: #fff;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            display: block;
            height: auto;
            opacity: 1;
            transition: all .15s linear;
            p {
                span {
                    font-family: "muli-regular";
                }
            }
        }
    
        .child-list {
            margin: 0;
            line-height: 30px;
            font-size: 15px;
            font-weight: 400;
            white-space: nowrap;
            position: relative;
            color: #fff;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            display: block;
            height: auto;
            opacity: 1;
            transition: all .15s linear;
        }

        .active-sidebar-type-class {
            border-left: 3px solid ${props =>
              props.themeSetting.sidebarTransParentValue === "on"
                ? props.themeSetting.sidebarTransParentActiveColor
                : props.sidebarTheme.style4VarientActiveTextColor} !important;
            .child-list {
                margin: 5px 7px 0 !important;
            }
        }

        .active-arrows {
            color: ${props =>
              props.sidebarTheme.activeRouteTextColor} !important;
        }
    
        .active {
            color: ${props =>
              props.themeSetting.activeLinkStyle !== "style1" ||
              props.themeSetting.activeLinkStyle !== "style3"
                ? props.themeSetting.sidebarTransParentValue === "on" &&
                  props.themeSetting.activeLinkStyle === "style4"
                  ? props.themeSetting.sidebarTransParentActiveColor +
                    "!important"
                  : props.sidebarTheme.activeRouteTextColor + "!important"
                : ""};
            padding-left: ${props =>
              (props.themeSetting.activeLinkStyle === "style2" ||
                props.themeSetting.activeLinkStyle === "style3") &&
              "1.6rem"};

            // style1
            background: ${props =>
              props.themeSetting.activeLinkStyle === "style1" ||
              props.themeSetting.activeLinkStyle === "style3" ||
              props.themeSetting.activeLinkStyle === "style2"
                ? props.sidebarTheme.activeRouteBackColor
                : ""};
            font-weight: 600;

            //  Style 2
            margin: ${props =>
              props.themeSetting.activeLinkStyle === "style2"
                ? "5px 0px 0 !important"
                : props.themeSetting.activeLinkStyle === "style3"
                ? "5px 10px 0 0 !important"
                : "5px 10px 0"};
            border-radius: ${props =>
              props.themeSetting.activeLinkStyle === "style2"
                ? "0 !important"
                : props.themeSetting.activeLinkStyle === "style3"
                ? "0px 30px 30px 0px !important"
                : "4px"};

            // style4
            color: ${props =>
              props.themeSetting.activeLinkStyle === "style4"
                ? props.sidebarTheme.style4VarientActiveTextColor + "!important"
                : ""};

            .new-update-tag {
                letter-spacing: 1px;
                color: white !important;
                background: #ff4081 !important;
            }
        }
    }

    .sidebar-header {
        cursor: pointer;
        position: relative;
        z-index: 4;
        padding: 8px 0.7rem;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        background-color: ${props =>
          props.themeSetting.sidebarTransParentValue !== "on" &&
          props.sidebarTheme.header &&
          props.sidebarTheme.header};
        .simple-text {            
            text-transform: capitalize;
            white-space: nowrap;
            font-size: 1rem;
            color: rgb(255, 255, 255);
            font-weight: 400;
            line-height: 30px;
            text-decoration: none;
            overflow: hidden;
        }
        .logo-mini {
            opacity: 1;
            float: left;
            text-align: center;
            margin-left: 12px;
            margin-right: 12px;
            padding: 6px 0px 8px;
            img {
                width: 34px;
                height: 34px;
            }
        }
        .logo-text {
            display: block;
            opacity: 1;
            transform: translateZ(0px);
            padding: 9px 0px 8px;
            color: ${props =>
              props.themeSetting.sidebarTransParentValue === "on"
                ? "white"
                : props.sidebarTheme.textColor} !important;
            font-weight: 600;
        }
    }

    .sidebar-whole-list {
        background: ${props => props.sidebarTheme.sideOpenListBackground} 
    }

    .new-update-tag {
        top: 0;
        position: absolute;
        right: 0;
        padding: 0px 10px;
        border-radius: 10px;
        letter-spacing: 1px;
        color: ${props =>
          props.themeSetting.sidebarTransParentValue === "on"
            ? "black"
            : props.sidebarTheme.activeRouteTextColor} !important;
        background: ${props =>
          props.themeSetting.sidebarTransParentValue === "on"
            ? "white"
            : props.sidebarTheme.activeRouteBackColor} !important;
    }
`;

export default SidebarWrapper;
