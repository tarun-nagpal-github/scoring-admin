import React from "react";
import AnalyticsProcessWrapper from "./analyticsProcessWidgets.style";
import { Progress } from "react-sweet-progress";

const AnalyticsProcessWidgets = ({ sidebarTheme }) => {
  return (
    <AnalyticsProcessWrapper style={{ height: "100%" }}>
      <div className="analytics-processwidget-card roe-shadow-2">
        <div className="header fs-20">Total Income</div>
        <div className="text-center">
          <Progress
            type="circle"
            percent={50}
            width={180}
            strokeWidth={8}
            theme={{
              active: {
                color: `#563E92`,
                trailColor: "#EFEFEF"
              }
            }}
            className="custom-progress-widget"
            symbolClassName="analytics"
          />
        </div>
        <div className="text-center desc1 fs--12 regular-text">
          $ 40,88,950.00
        </div>
        <div className="text-center desc2 mb-10">This Income cycle</div>
      </div>
    </AnalyticsProcessWrapper>
  );
};

export default AnalyticsProcessWidgets;
