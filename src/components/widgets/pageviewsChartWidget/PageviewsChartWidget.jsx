import React from "react";
import PageviewsChartWrapper from "./pageviewsChart.style";
import { Line } from "react-chartjs-2";
import customTooltip from "components/common/chartTooltip";

const PageviewsChartWidget = () => {
  const dataset1 = {
    label: "Visitors",
    fill: true,
    data: [410, 380, 800, 789, 450, 550, 187],
    backgroundColor: "rgba(92, 37, 141, 0.06)",
    borderColor: "#5C258D",
    pointBorderColor: "#5C258D",
    pointBackgroundColor: "#5C258D",
    shadowOffsetX: 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: "rgba(0, 196, 134, 0.5)",
    pointRadius: 4,
    pointBevelWidth: 3,
    pointBevelHighlightColor: "rgba(255, 255, 255, 0.75)",
    pointBevelShadowColor: "rgba(0, 196, 134, 0.5)",
    pointHoverRadius: 6,
    pointHoverBevelWidth: 4.5,
    pointHoverInnerGlowWidth: 20,
    lineTension: 0,
    pointHoverInnerGlowColor: `rgba(0, 196, 134, 0.5)`,
    pointHoverOuterGlowWidth: 20,
    pointHoverOuterGlowColor: `rgba(0, 196, 134, 0.5)`
  };

  const dataset2 = {
    label: "Page Views",
    fill: true,
    data: [1230, 1140, 2400, 2367, 1350, 1650, 561],
    backgroundColor: "rgba(255, 64, 129, 0.06)",
    borderColor: "#ff4081",
    pointBorderColor: "#ff4081",
    pointBackgroundColor: "#ff4081",
    lineTension: 0,
    shadowOffsetX: 3,
    shadowOffsetY: 3,
    shadowBlur: 10,
    shadowColor: "rgba(103, 116, 132, 0.5)",
    pointRadius: 4,
    pointBevelWidth: 3,
    pointBevelHighlightColor: "rgba(255, 255, 255, 0.75)",
    pointBevelShadowColor: "rgba(103, 116, 132, 0.5)",
    pointHoverRadius: 6,
    pointHoverBevelWidth: 4.5,
    pointHoverInnerGlowWidth: 20,
    pointHoverInnerGlowColor: `rgba(103, 116, 132, 0.5)`,
    pointHoverOuterGlowWidth: 20,
    pointHoverOuterGlowColor: `rgba(103, 116, 132, 0.5)`
  };

  const data = {
    labels: [
      "21th Jan",
      "22th Jan",
      "23rd Jan",
      "24th Jan",
      "25th Jan",
      "26th Jan",
      "27th Jan"
    ],
    datasets: [dataset1, dataset2]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    // tooltips: {
    //     mode: "index",
    //     intersect: false
    // },
    hover: {
      mode: "nearest",
      intersect: true
    },
    spanGaps: true,
    tooltips: {
      enabled: false,
      custom: customTooltip
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Month"
          },
          ticks: {
            fontColor: "#6c757d",
            color: "#6c757d",
            zeroLineColor: "#6c757d",
            fontStyle: "bold"
          },
          gridLines: {
            display: true,
            color: "rgba(0,0,0, 0.1)",
            zeroLineColor: "#6c757d"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Value"
          },
          ticks: {
            display: true,
            fontColor: "#6c757d",
            fontStyle: "bold"
          },
          gridLines: {
            display: false,
            color: "rgba(0,0,0, 0.1)",
            zeroLineColor: "#6c757d"
          }
        }
      ]
    }
  };

  return (
    <PageviewsChartWrapper>
      <div className="page-view-chart-widget-card roe-shadow-2">
        <div className="header fs-20">Visitors & Page views</div>
        <div className="analytics">
          <Line data={data} height={240} options={options} />
        </div>
      </div>
    </PageviewsChartWrapper>
  );
};

export default PageviewsChartWidget;
