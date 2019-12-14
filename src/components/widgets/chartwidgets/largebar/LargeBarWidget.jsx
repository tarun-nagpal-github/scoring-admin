import React, { useRef, useEffect } from "react";
import LargeBarChartWrapper from "./largebar.style";
import classNames from "classnames";
import Button from "components/button/Button";
import Chart from "chart.js";
import customTooltip from "components/common/chartTooltip";

const options = {
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
  maintainAspectRatio: false,
  scaleShowLabels: false,
  legend: false,
  responsive: true,
  barRoundness: 1,
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.9,
        stacked: true
      }
    ],
    yAxes: [
      {
        display: false,
        stacked: true
      }
    ]
  }
};

const LargeBarWidget = props => {
  const barRef = useRef();
  let newDataSet = [];

  const {
    headline,
    className,
    dataset,
    labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  } = props;

  if (dataset.length === 2) {
    newDataSet = [
      {
        barRoundness: 12,
        label: dataset[0].label,
        backgroundColor: dataset[0].barBackground,
        hoverBackgroundColor: dataset[0].hoverBackgroundColor,
        borderColor: dataset[0].barBorderColor,
        borderWidth: 2,
        data: dataset[0].chartData,
        hoverBorderColor: dataset[0].hoverBorderColor
      },
      {
        barRoundness: 12,
        label: dataset[1].label,
        backgroundColor: dataset[1].barBackground,
        hoverBackgroundColor: dataset[1].hoverBackgroundColor,
        borderColor: dataset[1].barBorderColor,
        borderWidth: 2,
        data: dataset[1].chartData,
        hoverBorderColor: dataset[1].hoverBorderColor
      }
    ];
  } else {
    newDataSet = [
      {
        barRoundness: 12,
        label: dataset[0].label,
        backgroundColor: dataset[0].barBackground,
        hoverBackgroundColor: dataset[0].hoverBackgroundColor,
        borderColor: dataset[0].barBorderColor,
        borderWidth: 2,
        hoverBorderColor: dataset[0].barBorderColor,
        data: dataset[0].chartData
      }
    ];
  }

  useEffect(() => {
    let ctx = barRef.current.getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        //Bring in data
        labels: labels,
        datasets: newDataSet
      },
      options: options
    });
    return () => {
      myChart.destroy();
    };
  }, [labels, newDataSet]);

  return (
    <LargeBarChartWrapper>
      <div className={classNames("roe-card-style", className)}>
        <div className="roe-card-body pt-24 backImage">
          <div className="flex-x">
            <div className="fs-16 bold-text widget-dark-color flex-1">
              {headline}
            </div>
            <div className="fs-14 demi-bold-text widget-grey-color">
              <Button className="c-btn c-info view-all">View All</Button>
            </div>
          </div>
          <div className="ptb-20">
            <canvas id="myChart" ref={barRef} height="200" />
          </div>
          <div className="flex-x action-container text-center">
            <div className="action message-action">
              <div className="widget-light-grey-color">
                <i className="fs-34 fas fa-building"></i>
              </div>
              <div className="fs-12 demi-bold-text pt-10 widget-dark-color">
                OverView
              </div>
            </div>
            <div className="action fs-13 demi-bold-text message-action">
              <div className="widget-light-grey-color">
                <i className="fs-34 far fa-question-circle"></i>
              </div>
              <div className="fs-12 demi-bold-text pt-10 widget-dark-color">
                Support
              </div>
            </div>
          </div>
          <div className="flex-x action-container text-center">
            <div className="action message-action">
              <div className="widget-light-grey-color">
                <i className="fs-34 fas fa-mail-bulk"></i>
              </div>
              <div className="fs-12 demi-bold-text pt-10 widget-dark-color">
                Marketing
              </div>
            </div>
            <div className="action fs-13 demi-bold-text message-action">
              <div className="widget-light-grey-color">
                <i className="fs-34 fab fa-galactic-senate"></i>
              </div>
              <div className="fs-12 demi-bold-text pt-10 widget-dark-color">
                Activities
              </div>
            </div>
          </div>
        </div>
      </div>
    </LargeBarChartWrapper>
  );
};

export default LargeBarWidget;
