import React, { Fragment } from "react";
import ThemeSettingWrapper from "./themeSetting.style";
import Radium from "radium";
import Themes from "../../settings/themeConfig";
import Switcher from "./themeChanger";
import LanguageSwitcher from "./LanguageSwitcher";
import config from "settings/languageConfig";
import IntlMessages from "util/intlMessages";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import { compose } from "redux";
import actions from "redux/themeSettings/actions";
import { withRouter } from "react-router-dom";
import { sidebarTransparentData } from "util/data/sidebarTransparentData";
import languageActions from "redux/languageSwitcher/actions";

const { changeLanguage } = languageActions;
const {
    toolbarAlignment,
    footerAlignment,
    toolbarDisplay,
    footerDisplay,
    sidebarTransParent,
    triggerTransparetImage,
    triggerActiveLinkStyle,
    sidebarMini,
    layoutStyle
} = actions;

const ThemeSetting = props => {
    const toolbarDisplayShow = () => {
        props.toolbarDisplay("show");
    };

    const toolbarDisplayHide = () => {
        props.toolbarDisplay("hide");
        if (props.themeSetting.toolbarAlignValue === "above") {
            props.toolbarAlignment("below");
        }
    };

    const toolbarAlignAbove = () => {
        props.toolbarAlignment("above");
        if (props.themeSetting.toolbarDisplayValue === "hide") {
            props.toolbarDisplay("show");
        }
    };

    const footerDisplayShow = () => {
        props.footerDisplay("show");
    };

    const footerDisplayHide = () => {
        props.footerDisplay("hide");
        if (props.themeSetting.footerAlignValue === "above") {
            props.footerAlignment("below");
        }
    };

    const footerAlignAbove = () => {
        props.footerAlignment("above");
        if (props.themeSetting.footerDisplayValue === "hide") {
            props.footerDisplay("show");
        }
    };

    const resetThemeSettings = () => {
        props.changeTheme("sidebarTheme", "gredient1");
        props.changeTheme("layoutTheme", "themedefault");
        props.changeTheme("footerTheme", "gredient1");
        props.changeTheme("topbarTheme", "gredient1");
        props.layoutStyle("vertical");
        props.changeLanguage("english");
        props.footerDisplay("show");
        props.toolbarDisplay("show");
        props.footerAlignment("below");
        props.toolbarAlignment("below");
        props.triggerActiveLinkStyle("style1");
        props.sidebarMini("off");
        props.sidebarTransParent("off");
    };

    const changeLanguageHandler = id => {
        props.changeLanguage(id);
    };

    const {
        mini,
        drawerWidth,
        closeSettingDrawer,
        sidebarTheme,
        topbarTheme,
        layoutTheme,
        footerTheme,
        changeTheme,
        language,
        themeSetting: { layout }
    } = props;
    const sidebar = {
        width: mini ? 0 : drawerWidth,
        "@media (max-width: 575.98px)": {
            width: mini ? 0 : drawerWidth
        }
    };

    return (
        <ThemeSettingWrapper sidebarTheme={sidebarTheme}>
            {!mini && (
                <div
                    className="themesetting-overlay"
                    onClick={closeSettingDrawer}
                ></div>
            )}
            <div
                id="sidebar"
                className="themeSettingRightside sideBack"
                style={sidebar}
            >
                <div className="sidebar-wrapper">
                    <div className="themeSettingHeading fs-20 medium-text">
                        <IntlMessages id="themeChanger.settings" />
                        <i
                            className="fas fa-times closeIcon cursor-pointer"
                            onClick={closeSettingDrawer}
                        ></i>
                    </div>
                </div>
                <Scrollbars style={{ height: "calc(100vh - 124px)" }} autoHide>
                    <div className="theme-setting-title">
                        <IntlMessages id="themeSetting.layouts" />
                    </div>
                    <div className="alignment-radio">
                        <div className="pretty p-default p-curve">
                            <input
                                type="radio"
                                name="Layout"
                                value="vertical"
                                onChange={() => props.layoutStyle("vertical")}
                                checked={
                                    props.themeSetting.layout === "vertical"
                                }
                            />
                            <div className="state p-primary-o">
                                <label>
                                    <IntlMessages id="themeSetting.vertical" />
                                </label>
                            </div>
                        </div>
                        <div className="pretty p-default p-curve">
                            <input
                                type="radio"
                                name="Layout"
                                value="horizontal"
                                onChange={() => props.layoutStyle("horizontal")}
                                checked={
                                    props.themeSetting.layout === "horizontal"
                                }
                            />
                            <div className="state p-primary-o">
                                <label>
                                    <IntlMessages id="themeSetting.horizontal" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="theme-setting-title">
                        <IntlMessages id="themeSetting.themebuilder" />
                    </div>
                    <Switcher
                        themeType="gredient"
                        config={Themes.topbarTheme}
                        changeTheme={changeTheme}
                        selectedId={topbarTheme.themeName}
                    />
                    <Switcher
                        themeType="gredient"
                        config={Themes.footerTheme}
                        changeTheme={changeTheme}
                        selectedId={footerTheme.themeName}
                    />
                    <Switcher
                        themeType="gredient"
                        config={Themes.sidebarTheme}
                        changeTheme={changeTheme}
                        selectedId={sidebarTheme.themeName}
                    />
                     <Switcher
                        config={Themes.layoutTheme}
                        changeTheme={changeTheme}
                        selectedId={layoutTheme.themeName}
                    />
                     <LanguageSwitcher
                        config={config}
                        selectedId={language.languageId}
                        changeLanguage={changeLanguageHandler}
                    />

                    <div className="theme-setting-title">
                        <IntlMessages id="themeSetting.activepanel" />
                    </div>

                    <div className="alignment-radio">
                        <div className="pb-6">
                            <div className="pretty p-default p-curve">
                                <input
                                    type="radio"
                                    name="ActivePanel"
                                    value="style1"
                                    onChange={() =>
                                        props.triggerActiveLinkStyle("style1")
                                    }
                                    checked={
                                        props.themeSetting.activeLinkStyle ===
                                        "style1"
                                    }
                                />
                                <div className="state p-primary-o">
                                    <label>
                                        <IntlMessages id="themeSetting.style1" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="pb-6">
                            <div className="pretty p-default p-curve">
                                <input
                                    type="radio"
                                    name="ActivePanel"
                                    value="style2"
                                    onChange={() =>
                                        props.triggerActiveLinkStyle("style2")
                                    }
                                    checked={
                                        props.themeSetting.activeLinkStyle ===
                                        "style2"
                                    }
                                />
                                <div className="state p-primary-o">
                                    <label>
                                        <IntlMessages id="themeSetting.style2" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div  className="pb-6">
                            <div className="pretty p-default p-curve">
                                <input
                                    type="radio"
                                    name="ActivePanel"
                                    value="style3"
                                    onChange={() =>
                                        props.triggerActiveLinkStyle("style3")
                                    }
                                    checked={
                                        props.themeSetting.activeLinkStyle ===
                                        "style3"
                                    }
                                />
                                <div className="state p-primary-o">
                                    <label>
                                        <IntlMessages id="themeSetting.style3" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="pretty p-default p-curve">
                                <input
                                    type="radio"
                                    name="ActivePanel"
                                    value="style4"
                                    onChange={() =>
                                        props.triggerActiveLinkStyle("style4")
                                    }
                                    checked={
                                        props.themeSetting.activeLinkStyle ===
                                        "style4"
                                    }
                                />
                                <div className="state p-primary-o">
                                    <label>
                                        <IntlMessages id="themeSetting.style4" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        layout !== 'horizontal' && 
                        <Fragment>
                            <div className="theme-setting-title">
                                <IntlMessages id="themeSetting.alignments" />
                            </div>

                            <div className="themeChangeBlock">
                                <h4>
                                    <IntlMessages id="themeSetting.topbar" />
                                </h4>
                            </div>
                            <div className="alignment-radio">
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="Toolbar"
                                        value="below"
                                        onChange={() => props.toolbarAlignment("below")}
                                        checked={
                                            props.themeSetting.toolbarAlignValue ===
                                            "below"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.below" />
                                        </label>
                                    </div>
                                </div>
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="Toolbar"
                                        value="above"
                                        onChange={toolbarAlignAbove}
                                        checked={
                                            props.themeSetting.toolbarAlignValue ===
                                            "above"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.above" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="themeChangeBlock">
                                <h4>
                                    <IntlMessages id="themeSetting.footer" />
                                </h4>
                            </div>
                            <div className="alignment-radio">
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="Footer"
                                        value="below"
                                        onChange={() => props.footerAlignment("below")}
                                        checked={
                                            props.themeSetting.footerAlignValue ===
                                            "below"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.below" />
                                        </label>
                                    </div>
                                </div>
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="Footer"
                                        value="above"
                                        onChange={footerAlignAbove}
                                        checked={
                                            props.themeSetting.footerAlignValue ===
                                            "above"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.above" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="theme-setting-title">
                                <IntlMessages id="themeSetting.display" />
                            </div>

                            <div className="themeChangeBlock">
                                <h4>
                                    <IntlMessages id="themeSetting.topbar" />
                                </h4>
                            </div>
                            <div className="alignment-radio">
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="ToolbarDisplay"
                                        value="show"
                                        onChange={toolbarDisplayShow}
                                        checked={
                                            props.themeSetting.toolbarDisplayValue ===
                                            "show"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.show" />
                                        </label>
                                    </div>
                                </div>
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="ToolbarDisplay"
                                        value="hide"
                                        onChange={toolbarDisplayHide}
                                        checked={
                                            props.themeSetting.toolbarDisplayValue ===
                                            "hide"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.hide" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="themeChangeBlock">
                                <h4>
                                    <IntlMessages id="themeSetting.footer" />
                                </h4>
                            </div>
                            <div className="alignment-radio">
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="FooterDisplay"
                                        value="show"
                                        onChange={footerDisplayShow}
                                        checked={
                                            props.themeSetting.footerDisplayValue ===
                                            "show"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.show" />
                                        </label>
                                    </div>
                                </div>
                                <div className="pretty p-default p-curve">
                                    <input
                                        type="radio"
                                        name="FooterDisplay"
                                        value="hide"
                                        onChange={footerDisplayHide}
                                        checked={
                                            props.themeSetting.footerDisplayValue ===
                                            "hide"
                                        }
                                    />
                                    <div className="state p-primary-o">
                                        <label>
                                            <IntlMessages id="themeSetting.hide" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    }

                    <div className="theme-setting-title">
                        <IntlMessages id="themeSetting.sidebarmini" />
                    </div>

                    <div className="alignment-radio">
                        <div className="pretty p-default p-curve">
                            <input
                                type="radio"
                                name="sidebarMini"
                                value="on"
                                onChange={() => props.sidebarMini("on")}
                                checked={
                                    props.themeSetting.sidebarMiniValue === "on"
                                }
                            />
                            <div className="state p-primary-o">
                                <label>
                                    <IntlMessages id="themeSetting.on" />
                                </label>
                            </div>
                        </div>
                        <div className="pretty p-default p-curve">
                            <input
                                type="radio"
                                name="sidebarMini"
                                value="off"
                                onChange={() => props.sidebarMini("off")}
                                checked={
                                    props.themeSetting.sidebarMiniValue ===
                                    "off"
                                }
                            />
                            <div className="state p-primary-o">
                                <label>
                                    <IntlMessages id="themeSetting.off" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="theme-setting-title">
                        <IntlMessages id="themeSetting.sidebartransparent" />
                    </div>

                    <div className="themeChangeBlock">
                        <h4>
                            <IntlMessages id="themeSetting.tranperentmod" />
                        </h4>
                    </div>
                    <div className="alignment-radio">
                        <div className="pretty p-default p-curve">
                            <input
                                type="radio"
                                name="sidebarTransparent"
                                value="on"
                                onChange={() => props.sidebarTransParent("on")}
                                checked={
                                    props.themeSetting
                                        .sidebarTransParentValue === "on"
                                }
                            />
                            <div className="state p-primary-o">
                                <label>
                                    <IntlMessages id="themeSetting.on" />
                                </label>
                            </div>
                        </div>
                        <div className="pretty p-default p-curve">
                            <input
                                type="radio"
                                name="sidebarTransparent"
                                value="off"
                                onChange={() => props.sidebarTransParent("off")}
                                checked={
                                    props.themeSetting
                                        .sidebarTransParentValue === "off"
                                }
                            />
                            <div className="state p-primary-o">
                                <label>
                                    <IntlMessages id="themeSetting.off" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="plr-10">
                        <div className="row ma-0">
                            {sidebarTransparentData.map((e, i) => {
                                return (
                                    <div className="col-3 pa-5" key={i}>
                                        <img
                                            style={
                                                props.themeSetting
                                                    .transparentImage ===
                                                e.image
                                                    ? {
                                                          border: `2px solid #563c91`
                                                      }
                                                    : {}
                                            }
                                            className="transparent-image cursor-pointer"
                                            src={e.image}
                                            alt="sidebar"
                                            width="100%"
                                            height="100px"
                                            onClick={() =>
                                                props.triggerTransparetImage(
                                                    e.image
                                                )
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Scrollbars>
                <div
                    className="text-center ptb-15"
                    onClick={resetThemeSettings}
                >
                    <button className="c-btn c-danger fs-14 demi-bold-text">
                        RESET
                    </button>
                </div>
            </div>
        </ThemeSettingWrapper>
    );
};

const mapStateToProps = state => {
    return {
        themeSetting: {
            toolbarAlignValue: state.themeSetting.toolbarAlignValue,
            footerAlignValue: state.themeSetting.footerAlignValue,
            toolbarDisplayValue: state.themeSetting.toolbarDisplayValue,
            footerDisplayValue: state.themeSetting.footerDisplayValue,
            sidebarTransParentValue: state.themeSetting.sidebarTransParentValue,
            transparentImage: state.themeSetting.transparentImage,
            activeLinkStyle: state.themeSetting.activeLinkStyle,
            sidebarMiniValue: state.themeSetting.sidebarMiniValue,
            layout: state.themeSetting.layout
        },
        language: state.LanguageSwitcher.language
    };
};

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        {
            toolbarAlignment,
            layoutStyle,
            footerAlignment,
            toolbarDisplay,
            footerDisplay,
            sidebarTransParent,
            triggerTransparetImage,
            triggerActiveLinkStyle,
            sidebarMini,
            changeLanguage
        }
    )
)(Radium(ThemeSetting));
