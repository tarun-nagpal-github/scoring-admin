import React from "react";
import LatestActivityWrapper from "./latestactivity.style";
import { people1, people2, people3, people4 } from "./../../../helper/constant";

const LatestActivity = () => {
  return (
    <LatestActivityWrapper className="fill-height">
      <div className="card roe-shadow-2 fill-height">
        <div className="card-body">
          <div className="flex-x align-center">
            <h4 className="mb-0 fs-20">Latest Activity</h4>
            <div className="ml-auto nevy--text fs-15 demi-bold-text">
              View more
            </div>
          </div>
          <div className="flex-x ptb-15 border-bottom mt-9">
            <div>
              <img className="img-sm" src={people1} alt="profile" />
            </div>
            <div className="mlr-10 flex-1">
              <p className="mb-1 fs-15 demi-bold-text">Mobile Apps Redesign</p>
              <small className="text-muted">+23 since last year</small>
            </div>
            <small className="text-muted">10:07PM</small>
          </div>

          <div className="flex-x ptb-15 border-bottom">
            <div>
              <img className="img-sm" src={people4} alt="profile" />
            </div>
            <div className="mlr-10 flex-1">
              <p className="mb-1 fs-15 demi-bold-text">Analytics Dashboard</p>
              <small className="text-muted">+23 since last year</small>
            </div>
            <small className="text-muted">10:07PM</small>
          </div>

          <div className="flex-x ptb-15 border-bottom">
            <div>
              <img className="img-sm" src={people2} alt="profile" />
            </div>
            <div className="mlr-10 flex-1">
              <p className="mb-1 fs-15 demi-bold-text">Great Logo Design</p>
              <small className="text-muted">+23 since last year</small>
            </div>
            <small className="text-muted">10:07PM</small>
          </div>

          <div className="flex-x ptb-15 border-bottom mb-6">
            <div>
              <img className="img-sm" src={people3} alt="profile" />
            </div>
            <div className="mlr-10 flex-1">
              <p className="mb-1 fs-15 demi-bold-text">Website Development</p>
              <small className="text-muted">+23 since last year</small>
            </div>
            <small className="text-muted">10:07PM</small>
          </div>
        </div>
      </div>
    </LatestActivityWrapper>
  );
};

export default LatestActivity;
