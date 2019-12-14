import React from "react";
import MinibarWidgetWrapper from "./minibar.style";
import { Bar } from "react-chartjs-2";
import classNames from "classnames";
import customTooltip from "components/common/chartTooltip";

const options = {
  maintainAspectRatio: false,
  scaleShowLabels: false,
  legend: false,
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
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

const MinibarWidgets = props => {
  const {
    headline,
    subheader,
    dark = false,
    background = "#ffffff",
    barColor,
    className,
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
        backgroundColor: barColor,
        borderColor: barColor,
        borderWidth: 1,
        hoverBackgroundColor: barColor,
        hoverBorderColor: barColor,
        data: chartData
      }
    ]
  };

  return (
    <MinibarWidgetWrapper dark={dark} background={background}>
      <div
        className={classNames(
          "bar-widget-card",
          "roe-shadow-2",
          "text-center",
          "pa-15",
          className
        )}
      >
        <div>
          <Bar data={data} height={80} options={options} />
        </div>
        <div className="headline pt-15 fs-22 bold-text">{headline}</div>
        <div className="bar-widget-card-info fs-14 demi-bold-text">
          {subheader}
        </div>
      </div>
    </MinibarWidgetWrapper>
  );
};

export default MinibarWidgets;
