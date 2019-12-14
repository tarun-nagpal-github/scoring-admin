import React from 'react';
import SocialProfileInfoWrapper from './socialProfile.style'

const SocialProfileInfo = ({ profile, name, position, info }) => {
    return (
        <SocialProfileInfoWrapper>
            <div className="widget-container">
                <div className="roe-card-style">
                    <div className="roe-card-body pt-24">
                        <div className="profile-widget-image text-center">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="text-center">
                            <div className="fs-16 bold-text mt-10 widget-dark-color">
                                {name}
                            </div>
                            <div className="fs-12 widget-grey-color">
                                {position}
                            </div>
                            <div className="fs-12 widget-light-grey-color medium-text mt-10">
                                {info}
                            </div>
                        </div>
                    </div>
                    <div className="flex-x action-container">
                        <div className="action message-action widget-dark-color">
                            <i className="far fa-comment-alt mr-6 fs-12"></i>
                            <div className="fs-12 demi-bold-text">
                                Message
                            </div>
                        </div>
                        <div className="action fs-13 demi-bold-text widget-dark-color">
                            <i className="far fa-user mr-6 fs-12"></i>
                            <div className="fs-12 demi-bold-text">
                                View Profile
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SocialProfileInfoWrapper>
    );
};

export default SocialProfileInfo;