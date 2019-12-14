import React from "react";
import MyBalanceWidgetWrapper from "./mybalance.style";
import { Bar } from "react-chartjs-2";
import customTooltip from "components/common/chartTooltip";
import { Progress } from "react-sweet-progress";

const options = {
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        barPercentage: 0.7,
        position: "bottom",
        display: true,
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true, //this will remove only the label
          stepSize: 500,
          fontColor: "#111",
          fontSize: 12,
          padding: 10
        }
      }
    ],
    yAxes: [
      {
        stacked: false,
        display: false,
        gridLines: {
          drawBorder: true,
          display: false,
          color: "#eef0fa",
          drawTicks: false,
          zeroLineColor: "rgba(90, 113, 208, 0)"
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#a7afb7",
          fontSize: 14,
          callback: function(value, index, values) {
            return value + "k";
          }
        }
      }
    ]
  },
  legend: {
    display: false
  },
  plugins: {
    datalabels: {
      display: false,
      align: "center",
      anchor: "center"
    }
  }
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Demand",
      data: [90, 85, 100, 105],
      backgroundColor: ["#767ca3", "#767ca3", "#767ca3", "#767ca3"],
      borderColor: ["#767ca3", "#767ca3", "#767ca3", "#767ca3"],
      borderWidth: 1,
      fill: false
    },
    {
      label: "Supply",
      data: [200, 200, 200, 200],
      backgroundColor: ["#eef0fa", "#eef0fa", "#eef0fa", "#eef0fa"],
      borderColor: ["#eef0fa", "#eef0fa", "#eef0fa", "#eef0fa"],
      borderWidth: 1,
      fill: false
    }
  ]
};

const MyBalanceWidget = () => {
  return (
    <MyBalanceWidgetWrapper className="fill-height">
      <div className="card roe-shadow-2 fill-height">
        <div className="card-body">
          <h4 className="fs-20">My Balance</h4>
          <div className="d-lg-flex justify-content-between align-items-center">
            <h1 className="text-dark mb-0 fs-35 mt-3">$5800</h1>
            <p className="nevy--text mb-0 font-weight-medium">+40.42% ($211)</p>
          </div>
          <p className="mb-4 mt-1 pb-1 text-muted fs-14">
            Deposit: <span className="font-weight-bold">$6400</span>
          </p>
          <Bar data={data} height={140} options={options} />
          <div className="border p-3 mt-2">
            <div className="row">
              <div className="col-sm-6 mb-4 mb-lg-0">
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="text-small text-dark">Available :</div>
                </div>
                <div>
                  <Progress
                    percent={48}
                    theme={{
                      active: {
                        color: "#ffe670"
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="text-small text-dark">Pending :</div>
                </div>
                <div>
                  <Progress
                    percent={75}
                    theme={{
                      active: {
                        color: "#ff5252"
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyBalanceWidgetWrapper>
  );
};

export default MyBalanceWidget;
