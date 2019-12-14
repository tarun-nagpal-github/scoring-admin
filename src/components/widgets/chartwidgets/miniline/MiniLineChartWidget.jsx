import React from "react";
import MiniLineChartWrapper from "./miniline.style";
import { Line } from "react-chartjs-2";
import classNames from "classnames";
import customTooltip from "components/common/chartTooltip";

const options = {
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
  maintainAspectRatio: false,
  scaleShowLabels: false,
  legend: false,
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.3
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

const MiniLineChartWidget = props => {
  const {
    headline,
    barBackground,
    dark = false,
    background = "#ffffff",
    barColor,
    className,
    typeNames,
    typeCounts,
    count,
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
    ],
    chartData = [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 90, 71]
  } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        backgroundColor: barBackground,
        borderColor: barColor,
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: barColor,
        data: chartData
      }
    ]
  };

  return (
    <MiniLineChartWrapper dark={dark} background={background}>
      <div className={classNames("roe-card-style", className)}>
        <div className="roe-card-body pt-24 backImage">
          <div className="flex-x align-center">
            <div className="fs-16 bold-text widget-dark-color flex-1">
              {headline}
            </div>
            <div className="fs-14 demi-bold-text widget-grey-color">
              {count}
            </div>
          </div>
          <div className="ptb-10">
            <Line data={data} height={80} options={options} />
          </div>
          <div className="flex-x action-container text-center mt-10">
            <div className="action message-action">
              <div className="fs-12 demi-bold-text widget-dark-color">
                {typeNames[0]}
              </div>
              <div className="fs-12 medium-text lighttext--text widget-light-grey-color">
                {typeCounts[0]}
              </div>
            </div>
            <div className="action fs-13 demi-bold-text message-action">
              <div className="fs-12 demi-bold-text widget-dark-color">
                {typeNames[1]}
              </div>
              <div className="fs-12 medium-text lighttext--text widget-light-grey-color">
                {typeCounts[1]}
              </div>
            </div>
            <div className="action fs-13 demi-bold-text">
              <div className="fs-12 demi-bold-text widget-dark-color">
                {typeNames[2]}
              </div>
              <div className="fs-12 medium-text lighttext--text widget-light-grey-color">
                {typeCounts[2]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MiniLineChartWrapper>
  );
};

export default MiniLineChartWidget;
