import React, { Component } from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";

class Intro extends Component {
  render() {
    const { sidebarTheme } = this.props;

    const activeColor = {
      color: sidebarTheme.activeColor
    };

    return (
      <div>
        <PageTitle title="sidebar.intro" />

        <div className="plr-15">
          <div className="mtb-30 theme-color">
            <div className="introduction" style={activeColor}>
              Welcome to Dashboard
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(Intro);
