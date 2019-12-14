import React, { useState } from 'react';
import LayoutSettingWrapper from './layoutSettingWrapper.style';
import RoyTooltip from "components/common/RoyTooltip";
import { bestDemos } from 'util/data/bestThemeConfig';
import { connect } from "react-redux";
import themeActions from "redux/themeChanger/actions.js";
import ShowCofigDialog from './ShowCofigDialog';
import settingActions from "redux/themeSettings/actions";

const { changeTheme } = themeActions;
const {
    layoutStyle,
    triggerActiveLinkStyle
} = settingActions;

const LayoutSettings = ({mini, drawerWidth, closeSettingDrawer, changeTheme, layoutStyle, triggerActiveLinkStyle}) => {
    const [dialog, setDialog] = useState(false);
    const [currentConfig, setCurrentConfig] = useState(false);

    const sidebar = {
        width: mini ? 0 : drawerWidth,
    };

    const viewTheme = (theme) => {
        changeTheme("sidebarTheme", theme.sidebarTheme);
        changeTheme("topbarTheme", theme.topbarTheme);
        changeTheme("footerTheme", theme.footerTheme);
        changeTheme("layoutTheme", theme.layoutTheme);
        if(theme.hasOwnProperty('layout')) {
            layoutStyle(theme.layout)
        }

        if(theme.hasOwnProperty('activeLinkStyle')) {
            triggerActiveLinkStyle(theme.activeLinkStyle);
        }
    }

    const toggleConfigDialog = (theme) => {
        setDialog(!dialog)
        setCurrentConfig(theme)
    }

    return (
        <LayoutSettingWrapper>
             {!mini && (
                <div
                    className="themesetting-overlay"
                    onClick={closeSettingDrawer}
                ></div>
            )}
            <div
                id="sidebar"
                className="layoutSetting sideBack"
                style={sidebar}
            >
                <div className="setting-wrapper">
                    <div className="fs-18 medium-text text-center">
                        Select A Layout
                    </div>
                    <div>
                        {
                            bestDemos.map((theme,i) => {
                                return (
                                <div className="best-theme-block" key={i}>
                                    <div className="text-center fs-16 pb-10">{theme.name}</div>
                                    <img className="demo-image" src={theme.demo} alt="demo"/>
                                    <div className="image-overlay flex-x center">
                                        <div>
                                            <RoyTooltip id={`view${theme.id}`} title={"Preview"} placement="bottom">
                                                <button 
                                                    id={`view${theme.id}`} 
                                                    className="c-btn c-primary mr-10"
                                                    onClick={() => viewTheme(theme)}
                                                >
                                                    <i className="far fa-eye"></i>
                                                </button>
                                            </RoyTooltip>
                                            <RoyTooltip id={`Setting${theme.id}`} title={"Config"} placement="bottom">
                                                <button 
                                                    id={`Setting${theme.id}`} 
                                                    className="c-btn c-info"
                                                    onClick={() => toggleConfigDialog(theme)}
                                                >
                                                    <i className="fas fa-cog"></i>
                                                </button>
                                            </RoyTooltip>
                                        </div>
                                    </div>
                                </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <ShowCofigDialog
                className="media-modal"
                modal={dialog}
                setmodal={toggleConfigDialog}
                currentConfig={currentConfig}
            />
        </LayoutSettingWrapper>
    );
};

export default connect(
    null,
    {
        changeTheme,
        layoutStyle,
        triggerActiveLinkStyle
    }
)(LayoutSettings);