import React from "react";
import SocialAnalyticWrapper from "./socialanalytic.style";
import Button from "components/button/Button";
import { Doughnut } from "react-chartjs-2";
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

const SocialAnalyticsWidgets = props => {
  const {
    profile,
    name,
    position,
    banner,
    backgroundsList,
    hoverbackgroundsList,
    barColor,
    className,
    info,
    labels = ["January", "February", "March"],
    chartData = [65, 59, 80]
  } = props;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        borderWidth: 2,
        hoverBorderColor: barColor,
        data: chartData,
        backgroundColor: backgroundsList,
        hoverBackgroundColor: hoverbackgroundsList
      }
    ]
  };

  return (
    <SocialAnalyticWrapper banner={banner}>
      <div className={classNames("roe-card-style", className)}>
        <div className="roe-card-body ptb-50 backImage flex-x">
          <div className="profile-widget-image text-center">
            <img src={profile} alt="profile" />
          </div>
          <div className="whitelight--text pl-10 flex-1">
            <div className="fs-16 bold-text mt-10">{name}</div>
            <div className="fs-12">{position}</div>
          </div>
          <div>
            <Button className="c-btn c-success ma-5">View Profile</Button>
          </div>
        </div>
        <div className="fs-16 demi-bold-text text-center ptb-20 info-block widget-light-grey-color">
          {info}
        </div>
        <div className="ptb-10">
          <Doughnut data={data} height={140} options={options} />
        </div>
        <div className="flex-x action-container">
          <div className="action message-action widget-dark-color">
            <i className="far fa-comment-alt mr-6 fs-12"></i>
            <div className="fs-12 demi-bold-text">Message</div>
          </div>
          <div className="action fs-13 demi-bold-text widget-dark-color">
            <i className="fas fa-users mr-6 fs-12"></i>
            <div className="fs-12 demi-bold-text">View Followers</div>
          </div>
        </div>
      </div>
    </SocialAnalyticWrapper>
  );
};

export default SocialAnalyticsWidgets;
