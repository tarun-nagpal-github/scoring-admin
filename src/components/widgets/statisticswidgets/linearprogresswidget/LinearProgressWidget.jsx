import React from "react";
import classNames from "classnames";
import { Progress } from "react-sweet-progress";
import LinearProgressWrapper from "./progess.style";
import "react-sweet-progress/lib/style.css";

const LinearProgressWidget = ({
  headline,
  subheader,
  progress,
  progressColor,
  dark = false,
  info,
  className,
  background = "#ffffff"
}) => {
  return (
    <LinearProgressWrapper dark={dark} background={background}>
      <div className={classNames("linear-widget-card roe-shadow-2", className)}>
        <div className="linear-widget-header fs-20">{headline}</div>
        <div className="plr-16 pb-16">
          <div className="pb-6">
            <Progress
              percent={progress}
              theme={{
                active: {
                  color: `${progressColor}`
                }
              }}
            />
          </div>
          <div className="linear-widget-card-info fs-14 medium-text">
            {info}
          </div>
        </div>
      </div>
    </LinearProgressWrapper>
  );
};

export default LinearProgressWidget;
