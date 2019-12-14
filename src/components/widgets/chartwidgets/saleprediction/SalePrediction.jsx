import React from "react";
import { Doughnut } from "react-chartjs-2";
import SalePredictionWrapper from "./saleprediction.style";
import customTooltip from "components/common/chartTooltip";

const options = {
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
  cutoutPercentage: 75,
  animationEasing: "easeOutBounce",
  animateRotate: true,
  animateScale: false,
  responsive: true,
  maintainAspectRatio: false,
  showScale: true,
  legend: {
    display: false
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }
};

const data = {
  datasets: [
    {
      data: [185, 85, 65],
      backgroundColor: ["#5C258D", "#ffe670", "#00c486"],
      borderColor: ["#5C258D", "#ffe670", "#00c486"],
      hoverBackgroundColor: ["#a7afb7", "#a7afb7", "#a7afb7"],
      hoverBorderColor: ["#a7afb7", "#a7afb7", "#a7afb7"]
    }
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Paper Design", "Developing", "Testing"]
};

const LatestActivity = () => {
  return (
    <SalePredictionWrapper className="fill-height">
      <div className="card roe-shadow-2 fill-height">
        <div className="card-body">
          <h4 className="card-title fs-20">Project Completion</h4>
          <div className="row">
            <div className="col-md-6 aligner-wrapper mt-15">
              <Doughnut data={data} height={160} options={options} />
              <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center middle-block">
                <h4 className="d-block text-center mb-0 text-muted">567</h4>
                <small className="d-block text-center mb-2 text-muted">
                  Daily average
                </small>
              </div>
            </div>
            <div className="col-md-6 legend-wrapper">
              <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center">
                  <div className="dot-indicator nevy mt-1 mr-2"></div>
                  <h4 className="mb-0 text-dark fs-20">2.34%</h4>
                </div>
                <small className="text-muted ml-3">Paper Designs</small>
              </div>
              <div className="d-flex flex-column justify-content-center border-top border-bottom py-3 mt-3 mb-3">
                <div className="d-flex align-items-center">
                  <div className="dot-indicator bg-warning mt-1 mr-2"></div>
                  <h4 className="mb-0 text-dark fs-20">40%</h4>
                </div>
                <small className="text-muted ml-3">Developing</small>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center">
                  <div className="dot-indicator bg-success mt-1 mr-2"></div>
                  <h4 className="mb-0 text-dark fs-20">12%</h4>
                </div>
                <small className="text-muted ml-3">Testing</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SalePredictionWrapper>
  );
};

export default LatestActivity;
