import React from 'react';
import classNames from 'classnames';
import SocialSemiLayoutWidgetWrapper from './socialsemilayout.style';

const SocialSemiLayoutWidget = (
    { avatar, background = 'white', className = '', dark = false, name, detail, icon = false, iconClass, iconColor, iconBackground }
) => {
    return (
        <SocialSemiLayoutWidgetWrapper
            background={background}
            dark={dark}
            iconColor={iconColor ? iconColor : 'white'}
            iconBackground={iconBackground ? iconBackground : '#6200ea'}
        >
            <div className={classNames('profile-widget-card', className)}>
                {
                    !icon

                        ?

                        <div className="profile-image">
                            <img src={avatar} alt="#" />
                        </div>

                        :

                        <div className="profile-widget-icon">
                            <i className={iconClass} />
                        </div>
                }
                <div>
                    <div className="card-title">
                        {name}
                    </div>
                    <div className="card-discription">
                        {detail}
                    </div>
                </div>
            </div>
        </SocialSemiLayoutWidgetWrapper>
    )
}

export default SocialSemiLayoutWidget;