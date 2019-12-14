import React from "react";
import BottomCardLineSecondChartWrapper from "./bottomcardline.style";
import { Line } from "react-chartjs-2";
import classNames from "classnames";
import customTooltip from "components/common/chartTooltip";

const options = {
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
  responsive: true,
  animation: {
    animateScale: true,
    animateRotate: true
  },
  elements: {
    point: {
      radius: 0
    }
  },
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  legend: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          color: '"#383e5d"',
          zeroLineColor: '"#383e5d"'
        },
        ticks: {
          display: false,
          color: '"#383e5d"',
          zeroLineColor: '"#383e5d"'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          color: '"#383e5d"',
          zeroLineColor: '"#383e5d"'
        },
        ticks: {
          display: false,
          color: '"#383e5d"',
          zeroLineColor: '"#383e5d"'
        }
      }
    ]
  }
};

const BottomCardLinechartSecondWidget = props => {
  const { className, headline, subheader, progress } = props;

  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sessions",
        data: [320, 280, 300, 280, 300, 270, 350],
        backgroundColor: "#5C258D",
        borderColor: "#ff4081",
        borderWidth: 0,
        pointBackgroundColor: "#ff4081",
        pointRadius: 7,
        pointBorderWidth: 3,
        pointBorderColor: "#fff",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#ff4081",
        pointHoverBorderColor: "#ff4081",
        pointHoverBorderWidth: 2,
        pointHitRadius: 7
      }
    ]
  };

  return (
    <BottomCardLineSecondChartWrapper>
      <div className={classNames("line-card-widget", "text-center", className)}>
        <div className="card roe-shadow-2">
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <h4 className="mb-0 fs-14">{headline}</h4>
              <p className="mb-0 fs-14 bold-text">{progress}</p>
            </div>
            <h3 className="mb-4 fs-27 bold-text text-left">{subheader}</h3>
          </div>
          <Line data={data} height={90} options={options} />
        </div>
      </div>
    </BottomCardLineSecondChartWrapper>
  );
};

export default BottomCardLinechartSecondWidget;
