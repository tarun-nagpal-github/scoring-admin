
import actions from './actions';
import { themeSettings } from './../../settings/index'

const initState = themeSettings;

export default function rootReducer(state = initState, action) {

    switch (action.type) {
        case actions.TOOLBAR_ALIGNMENT:
            return {
                ...state,
                toolbarAlignValue: action.toolbarAlign,
            }
        case actions.FOOTER_ALIGNMENT:
            return {
                ...state,
                footerAlignValue: action.footerAlign
            }
        case actions.SIDEBAR_DISPLAY:
            return {
                ...state,
                sidebarDisplayValue: action.sidebarDisplay,
            }
        case actions.TOOLBAR_DISPLAY:
            return {
                ...state,
                toolbarDisplayValue: action.toolbarDisplay
            }
        case actions.FOOTER_DISPLAY:
            return {
                ...state,
                footerDisplayValue: action.footerDisplay
            }
        case actions.SIDEBAR_TRANSPARENT:
            return {
                ...state,
                sidebarTransParentValue: action.sidebarTransParent
            }
        case actions.TRIGGER_TRANSPARENT_IMAGE:
            return {
                ...state,
                transparentImage: action.transparentImage
            }
        case actions.ACTIVE_LINK_STYLE:
            return {
                ...state,
                activeLinkStyle: action.activeLinkStyle
            }
        case actions.SIDEBAR_MINI_VALUE:
            return {
                ...state,
                sidebarMiniValue: action.sidebarMiniValue
            }
        case actions.LAYOUT_STYLE:
            return {
                ...state,
                layout: action.layout
            }
        default:
            return state
    }
}