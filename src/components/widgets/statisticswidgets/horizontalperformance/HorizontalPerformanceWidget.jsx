import React from 'react';
import classNames from 'classnames';
import HorizontalPerformanceWrapper from './horperformance.style'
import Button from 'components/button/Button';

const HorizontalPerformanceWidget = (props) => {

    const {
        className
    } = props;

    return (
        <HorizontalPerformanceWrapper>
            <div
                className={classNames(
                    "roe-card-style",
                    className
                )}
            >
                <div className="roe-card-header fs-20 bold-text"> 
                    Interview Performance
                </div>
                <div className="roe-card-body">
                    <div className="row ma-0 text-center">
                        <div className="col-lg-4">
                            <div className="flex-x pt-10">
                                <div className="mr-15">
                                    <button className="round-widget-button c-primary">
                                        <i className="fas fa-chalkboard-teacher fs-20"></i>
                                    </button>
                                </div>
                                <div>
                                    <div className="fs-18 bold-text widget-dark-color">
                                        Technical Round
                                    </div>
                                    <div className="fs-24 bold-text widget-grey-color ptb-6">
                                        8.9/10
                                    </div>
                                    <div className="fs-14 bold-text widget-light-grey-color">
                                        85% - Positive
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="flex-x pt-10">
                                <div className="mr-15">
                                    <button className="round-widget-button c-warning">
                                        <i className="fas fa-chalkboard-teacher fs-20"></i>
                                    </button>
                                </div>
                                <div>
                                    <div className="fs-18 bold-text widget-dark-color">
                                        Practical Round
                                    </div>
                                    <div className="fs-24 bold-text widget-grey-color ptb-6">
                                        5/10
                                    </div>
                                    <div className="fs-14 bold-text widget-light-grey-color">
                                        50% - Nagative
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="flex-x pt-10">
                                <div className="mr-15">
                                    <button className="round-widget-button c-info">
                                        <i className="fas fa-chalkboard-teacher fs-20"></i>
                                    </button>
                                </div>
                                <div>
                                    <div className="fs-18 bold-text widget-dark-color">
                                        HR Round
                                    </div>
                                    <div className="fs-24 bold-text widget-grey-color ptb-6">
                                        8/10
                                    </div>
                                    <div className="fs-14 bold-text widget-light-grey-color">
                                        70% - Average
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-20">
                    <Button className="c-btn c-rounded c-success view-all">View Overall Result</Button>
                </div>
            </div>
        </HorizontalPerformanceWrapper>
    );
};

export default HorizontalPerformanceWidget;