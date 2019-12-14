import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from 'components/common/PageTitle';

class Intro extends Component {

    render() {

        const { sidebarTheme } = this.props

        const activeColor = {
            color: sidebarTheme.activeColor
        }

        return (
            <div>
                <PageTitle title="sidebar.intro" />

                <div className="plr-15">
                    <div className="mtb-30 theme-color">
                        <div className="introduction" style={activeColor}>
                            Introduction
                        </div>
                        <div className="mtb-10">
                            This is simple quick start app. you can easily setup your theme as per our documentation.
                        </div>

                        <div className="mtb-10">
                            You can follow below files for setting your theme
                            <span className="chip"> src/settings/index </span>
                        </div>

                        <div className="mtb-10">
                            We removed all the components, views, and unnecessary things in quick start app.If you want any components please refer our Roe app.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.themeChanger
    };
}

export default connect(mapStateToProps, null)(Intro);