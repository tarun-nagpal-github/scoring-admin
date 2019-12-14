import React from 'react';
import FollowingProfileWrapper from './followingprofile.style'

const FollowingProfile = ({ profile, name, position, banner }) => {
    return (
        <FollowingProfileWrapper banner={banner}>
            <div className="roe-card-style">
                <div className="roe-card-body pt-24 backImage">
                    <div className="profile-widget-image text-center">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="text-center whitelight--text">
                        <div className="fs-16 bold-text mt-10">
                            {name}
                        </div>
                        <div className="fs-12">
                            {position}
                        </div>
                    </div>
                </div>
                <div className="flex-x action-container text-center">
                    <div className="action message-action">
                        <div className="fs-12 demi-bold-text widget-dark-color">
                            Followers
                        </div>
                        <div className="fs-12 medium-text lighttext--text widget-light-grey-color">
                            13k
                        </div>
                    </div>
                    <div className="action fs-13 demi-bold-text message-action">
                        <div className="fs-12 demi-bold-text widget-dark-color">
                            Following
                        </div>
                        <div className="fs-12 medium-text lighttext--text widget-light-grey-color">
                            11k
                        </div>
                    </div>
                    <div className="action fs-13 demi-bold-text">
                        <div className="fs-12 demi-bold-text widget-dark-color">
                            Tweets
                        </div>
                        <div className="fs-12 medium-text lighttext--text widget-light-grey-color">
                            1k
                        </div>
                    </div>
                </div>
            </div>
        </FollowingProfileWrapper>
    );
};

export default FollowingProfile;