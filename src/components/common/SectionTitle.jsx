import React from "react";
import { connect } from "react-redux";

const SectionTitle = ({ children, sidebarTheme }) => {
    const activeColor = {
        color: '#563c91'
    };

    return (
        <div>
            <div className="global-hash-title">
                <span style={activeColor}>#</span> {children}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(SectionTitle);
