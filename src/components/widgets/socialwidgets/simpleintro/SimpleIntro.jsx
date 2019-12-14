import React from 'react';
import SimpleIntroWrapper from './simpleintro.style'

const SimpleIntro = ({ profile, name, position, email }) => {
    return (
        <SimpleIntroWrapper>
            <div className="roe-card-style">
                <div className="roe-card-body pt-24 backImage">
                    <div className="flex-x">
                        <div className="profile-widget-image text-center">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="pl-10">
                            <div className="fs-18 bold-text widget-dark-color">
                                {name}
                            </div>
                            <div className="fs-14 widget-light-grey-color">
                                {email}
                            </div>
                            <div className="fs-15 demi-bold-text widget-grey-color mt-10">
                                {position}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SimpleIntroWrapper>
    );
};

export default SimpleIntro;