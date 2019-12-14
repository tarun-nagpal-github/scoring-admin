import React from "react";
import Gauge from "react-svg-gauge";
import UserInfoWrapper from "./userinfo.style";

const LatestActivity = () => {
  return (
    <UserInfoWrapper className="fill-height">
      <div className="card roe-shadow-2 fill-height">
        <div className="card-body">
          <h4 className="card-title fs-20">Company Info</h4>
          <div className="row">
            <div className="col-md-6 aligner-wrapper text-center">
              <Gauge
                value={70}
                width={200}
                height={140}
                label=""
                color="#563c91"
                valueLabelStyle={{ fontSize: "30px" }}
              />
            </div>
            <div className="col-md-6 legend-wrapper">
              <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center">
                  <div className="dot-indicator nevy mt-1 mr-2"></div>
                  <h4 className="mb-0 text-dark">4.34%</h4>
                </div>
                <small className="text-muted ml-3">Sales</small>
              </div>
              <div className="d-flex flex-column justify-content-center border-top border-bottom py-3 mt-3 mb-3">
                <div className="d-flex align-items-center">
                  <div className="dot-indicator bg-warning mt-1 mr-2"></div>
                  <h4 className="mb-0 text-dark">44%</h4>
                </div>
                <small className="text-muted ml-3">Products</small>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center">
                  <div className="dot-indicator bg-success mt-1 mr-2"></div>
                  <h4 className="mb-0 text-dark">22%</h4>
                </div>
                <small className="text-muted ml-3">Quality</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserInfoWrapper>
  );
};

export default LatestActivity;
