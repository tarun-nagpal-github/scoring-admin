import React from 'react';
import HorizontalBlogWrapper from './horizontalblog.style'
import Button from 'components/button/Button';
import classNames from 'classnames';

const SimpleBlog = (props) => {
    const {
        banner,
        title,
        created,
        info,
        like,
        comment,
        className
    } = props
    return (
        <HorizontalBlogWrapper>
             <div
                className={classNames(
                    "roe-card-style",
                    className
                )}
            >
                <div className="roe-card-body pa-0 backImage">
                    <div className="row ma-0">
                        <div className="col-lg-4 pa-0">
                            <div className="blog-cover">
                                <img src={banner} alt="blog"/>
                            </div>
                        </div>
                        <div className="col-lg-8 ptb-15">
                            <div className="fs-20 bold-text widget-dark-color mb-10">
                                {title}
                            </div>
                            <div className="fs-14 medium-text mb-10 widget-grey-color">
                                {created}
                            </div>
                            <div className="fs-15 medium-text widget-light-grey-color">
                                {info}
                            </div>
                            <div className="flex-x align-center mt-10">
                                <div className="flex-1">
                                    <Button className="c-btn c-info">READ MORE</Button>
                                </div>
                                <div className="mr-10">
                                    <i className="fas fa-share-alt fs-16 cursor-pointer widget-grey-color"></i>
                                </div>
                                <div>
                                    <i className="far fa-heart fs-16 cursor-pointer widget-grey-color"></i>
                                </div>
                                <div className="fs-16 demi-bold-text mr-10 ml-6 widget-light-grey-color">
                                    {like}
                                </div>
                                <div>
                                    <i className="far fa-comment-alt fs-16 cursor-pointer widget-grey-color"></i>
                                </div>
                                <div className="fs-16 demi-bold-text ml-6 widget-light-grey-color">
                                    {comment}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HorizontalBlogWrapper>
    );
};

export default SimpleBlog;