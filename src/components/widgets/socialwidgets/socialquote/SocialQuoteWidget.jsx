import React from 'react';
import SocialQuoteWrapper from './socialquote.style'

const SocialQuoteWidget = ({ profile, name, position, banner, info, like, quote }) => {
    return (
        <SocialQuoteWrapper banner={banner}>
            <div className="roe-card-style">
                <div className="roe-card-body backImage pos-relative pa-40">
                    <div className="fs-15 bold-text whitelight--text quote pl-35">
                        {quote}
                    </div>
                </div>
                <div className="flex-x pa-20">
                    <div className="profile-widget-image text-center">
                        <img src={profile} alt="profile" />
                    </div>
                    <div className="pl-10">
                        <div className="fs-14 bold-text widget-dark-color">
                            {name}
                        </div>
                        <div className="fs-12 demi-bold-text widget-grey-color">
                            {position}
                        </div>
                    </div>
                </div>
                <div className="fs-13 medium-text widget-light-grey-color pl-20">
                    {info}
                </div>
                <div className="flex-x align-center card-action pa-20">
                    <div className="mr-6">
                        <i className="far fa-heart fs-16 widget-grey-color"></i>
                    </div>
                    <div className="fs-16 demi-bold-text widget-grey-color">
                        {like}
                    </div>
                </div>
            </div>
        </SocialQuoteWrapper>
    );
};

export default SocialQuoteWidget;