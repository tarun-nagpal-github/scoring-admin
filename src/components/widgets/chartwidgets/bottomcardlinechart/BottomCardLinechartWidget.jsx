import React from "react";
import BottomCardLineChartWrapper from "./bottomcardline.style";
import { Line } from "react-chartjs-2";
import classNames from "classnames";
import customTooltip from "components/common/chartTooltip";

const options = {
  tooltips: {
    enabled: false,
    custom: customTooltip
  },
  scales: {
    yAxes: [
      {
        display: false
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    },
    line: {
      tension: 0
    }
  },
  stepsize: 100
};

const BottomCardLinechartWidget = props => {
  const { className, headline, subheader, progress } = props;

  var data = {
    labels: [
      "Year1901",
      "Year1902",
      "Year1903",
      "Year1904",
      "Year1905",
      "Year1906",
      "Year1907",
      "Year1908",
      "Year1909",
      "Year1910",
      "Year1911",
      "Year1912",
      "Year1913",
      "Year1914",
      "Year1915",
      "Year1916",
      "Year1917",
      "Year1918",
      "Year1919",
      "Year1920",
      "Year1921",
      "Year1922",
      "Year1923",
      "Year1924",
      "Year1925",
      "Year1926",
      "Year1927",
      "Year1928",
      "Year1929",
      "Year1930",
      "Year1931",
      "Year1932",
      "Year1933",
      "Year1934",
      "Year1935",
      "Year1936",
      "Year1937",
      "Year1938",
      "Year1939",
      "Year1940",
      "Year1941",
      "Year1942",
      "Year1943",
      "Year1944",
      "Year1945",
      "Year1946",
      "Year1947",
      "Year1948",
      "Year1949",
      "Year1950",
      "Year1951",
      "Year1952",
      "Year1953",
      "Year1954",
      "Year1955",
      "Year1956",
      "Year1957",
      "Year1958",
      "Year1959",
      "Year1960",
      "Year1961",
      "Year1962",
      "Year1963",
      "Year1964",
      "Year1965",
      "Year1966",
      "Year1967",
      "Year1968",
      "Year1969",
      "Year1970",
      "Year1971",
      "Year1972",
      "Year1973",
      "Year1974",
      "Year1975",
      "Year1976",
      "Year1977",
      "Year1978",
      "Year1979",
      "Year1980",
      "Year1981",
      "Year1982"
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [
          56,
          55,
          59,
          59,
          59,
          57,
          56,
          57,
          54,
          56,
          58,
          57,
          59,
          58,
          59,
          57,
          55,
          56,
          54,
          52,
          49,
          48,
          50,
          50,
          46,
          45,
          49,
          50,
          52,
          53,
          52,
          55,
          54,
          53,
          56,
          55,
          56,
          55,
          54,
          55,
          57,
          58,
          56,
          55,
          56,
          57,
          58,
          59,
          58,
          57,
          55,
          53,
          52,
          55,
          57,
          55,
          54,
          52,
          55,
          57,
          56,
          57,
          58,
          59,
          58,
          59,
          57,
          56,
          55,
          57,
          58,
          59,
          60,
          62,
          60,
          59,
          58,
          57,
          56,
          57,
          56,
          58,
          59
        ],
        borderColor: "#9B86F1",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 3,
        fill: "origin"
      }
    ]
  };

  return (
    <BottomCardLineChartWrapper>
      <div className={classNames("line-card-widget", "text-center", className)}>
        <div className="card roe-shadow-2">
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <h4 className="mb-0 fs-14">{headline}</h4>
              <p className="mb-0 fs-14 bold-text">{progress}</p>
            </div>
            <h3 className="mb-4 fs-27 bold-text text-left">{subheader}</h3>
          </div>
          <Line data={data} height={90} options={options} />
        </div>
      </div>
    </BottomCardLineChartWrapper>
  );
};

export default BottomCardLinechartWidget;
