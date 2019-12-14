import React from "react";
import classNames from "classnames";
import { Progress } from "react-sweet-progress";
import RoundProgressWrapper from "./roundProgess.style";

const RoundProgressWidget = ({
  headline,
  subheader,
  progress,
  progressColor,
  className,
  dark = false,
  info,
  background = "#ffffff"
}) => {
  return (
    <RoundProgressWrapper dark={dark} background={background}>
      <div
        className={classNames(
          "round-widget-card roe-shadow-2",
          "text-center",
          className
        )}
      >
        <div className="round-widget-header fs-20">{headline}</div>
        <div className="plr-16 pb-16">
          <div className="pb-6">
            <Progress
              type="circle"
              percent={progress}
              theme={{
                active: {
                  color: `${progressColor}`,
                  trailColor: "#EFEFEF"
                }
              }}
            />
          </div>
          <div className="headline fs-16 demi-bold-text">{subheader}</div>
          <div className="round-widget-card-info fs-12 regular-text">
            {info}
          </div>
        </div>
      </div>
    </RoundProgressWrapper>
  );
};

export default RoundProgressWidget;
