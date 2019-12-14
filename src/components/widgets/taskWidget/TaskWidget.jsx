import React from "react";
import TaskWidgetWrapper from "./task.style";

export const TaskWidget = ({ taskData, heading = "Task" }) => {
  return (
    <TaskWidgetWrapper className="fill-height">
      <div className="message-card roe-shadow-2 fill-height flex-y">
        <div className="fs-20 pa-15">{heading}</div>
        <div className="message-list flex-1">
          {taskData &&
            taskData.map((e, i) => {
              return (
                <div className="container list-container" key={i}>
                  <div className="ptb-10 ma-0 flex-x align-center">
                    <div className="">
                      <img
                        className="profie-image"
                        src={e.profile}
                        alt="#"
                      ></img>{" "}
                    </div>
                    <div className="flex-1 ml-15">
                      <div className="message fs-14 demi-bold-text">
                        {e.task}
                      </div>
                    </div>
                    <div className="task-icons">
                      <i className="far fa-edit mr-2"></i>
                      <i className="fas fa-trash"></i>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </TaskWidgetWrapper>
  );
};
