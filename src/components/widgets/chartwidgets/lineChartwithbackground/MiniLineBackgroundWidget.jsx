import React from "react";
import MiniLineBackChartWrapper from "./minilineback.style";
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

const MiniLineBackgroundWidget = props => {
  const {
    headline,
    barBackground,
    dark = false,
    background = "#ffffff",
    barColor,
    className,
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
    <MiniLineBackChartWrapper dark={dark} background={background}>
      <div className={classNames("roe-card-style roe-shadow-2", className)}>
        <div className="roe-card-body pt-24 backImage">
          <div className="flex-x align-center">
            <div className="fs-26 demi-bold-text widget-dark-color">
              {count}
            </div>
            <div className="fs-16 bold-text widget-light-grey-color pt-20 pl-10">
              {headline}
            </div>
          </div>
          <div className="ptb-10">
            <Line data={data} height={80} options={options} />
          </div>
        </div>
      </div>
    </MiniLineBackChartWrapper>
  );
};

export default MiniLineBackgroundWidget;
