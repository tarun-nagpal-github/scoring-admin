import React from 'react';

const PopoverBlock = ({ people, name, text, created }) => {
    return (
        <div className="mail-popover-block">
            <div className="flex-x">
                <div className="mail-photo">
                    <img src={people} alt="people" />
                </div>
                <div className="flex-1">
                    <div className="fs-13 demi-bold-text">
                        {name}
                    </div>
                    <div className="fs-11 medium-text">
                        {text}
                    </div>
                </div>
                <div className="fs-10 medium-text">
                    {created}
                </div>
            </div>
        </div>
    );
};

export default PopoverBlock;