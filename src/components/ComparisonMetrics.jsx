import React, { useState } from "react";
import DynamicChart from "./DynamicChart";

const ComparisonMetrics = () => {
  const [chartData1, setChartData1] = useState({
    chart: {
      type: "area",
      backgroundColor: "transparent",
      plotBackgroundColor: "transparent",
      plotBorderColor: "transparent",
    },
    title: {
      text: "Stocks",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: {
        text: "Year",
      },
    },
    yAxis: {
      title: {
        text: "Number of Employees",
      },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Installation & Developers",
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
          161454, 154610, 168960, 171558,
        ],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: {
          radius: 2,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  const [chartData2, setChartData2] = useState({
    chart: {
      type: "area",
      backgroundColor: "transparent",
      plotBackgroundColor: "transparent",
      plotBorderColor: "transparent",
    },
    title: {
      text: "Market-Cap",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: {
        text: "Year",
      },
    },
    yAxis: {
      title: {
        text: "Number of Employees",
      },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Installation & Developers",
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
          161454, 154610, 168960, 171558,
        ],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: {
          radius: 2,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  const [chartData3, setChartData3] = useState({
    chart: {
      type: "area",
      backgroundColor: "transparent",
      plotBackgroundColor: "transparent",
      plotBorderColor: "transparent",
    },
    title: {
      text: "Market-Cap",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: {
        text: "Year",
      },
    },
    yAxis: {
      title: {
        text: "Number of Employees",
      },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Installation & Developers",
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
          161454, 154610, 168960, 171558,
        ],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: {
          radius: 2,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  const [chartData4, setChartData4] = useState({
    chart: {
      type: "area",
      backgroundColor: "transparent",
      plotBackgroundColor: "transparent",
      plotBorderColor: "transparent",
    },
    title: {
      text: "Market-Cap",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: {
        text: "Year",
      },
    },
    yAxis: {
      title: {
        text: "Number of Employees",
      },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    legend: { enabled: false },
    series: [
      {
        name: "Installation & Developers",
        data: [
          43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
          161454, 154610, 168960, 171558,
        ],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0)"],
          ],
        },
        marker: {
          radius: 2,
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  const [button1, setButton1] = useState("Stocks");
  const [button2, setButton2] = useState("Expenses");
  const [button3, setButton3] = useState("Revenue");
  const [button4, setButton4] = useState("Market-Cap");

  //to swap charts
  const swapData = (data1, setData1, data2, setData2, b1, setB1, b2, setB2) => {
    const temp = data1;
    setData1(data2);
    setData2(temp);
    const tempB = b1;
    setB1(b2);
    setB2(tempB);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#000000] to-[#000000ee] flex flex-col justify-center px-10">
      <div className="heading w-full py-3  text-slate-400 hover:text-[rgb(216,210,250)]  font-lexend font-extralight flex justify-center items-center text-5xl mb-6">
        Comparision Metrics
      </div>
      <div className="tabs flex w-fit px-3 py-3 gap-10 mt-2 mb-5 rounded-md bg-[#111111]">
        <button
          onClick={() => {
            swapData(
              chartData1,
              setChartData1,
              chartData4,
              setChartData4,
              button1,
              setButton1,
              button4,
              setButton4
            );
          }}
          className="tab bg-gradient-to-br from-[#ffffffce] to-[#030169] rounded-md p-1 text-white font-legend h-full min-w-28 shadow-inner flex justify-center items-center"
        >
          {button1}
        </button>
        <button
          onClick={() => {
            swapData(
              chartData2,
              setChartData2,
              chartData4,
              setChartData4,
              button2,
              setButton2,
              button4,
              setButton4
            );
          }}
          className="tab bg-gradient-to-br from-[#ffffffce] to-[#030169]  font-legend rounded-md p-1 text-white h-full min-w-28 shadow-inner flex justify-center items-center"
        >
          {button2}
        </button>
        <button
          onClick={() => {
            swapData(
              chartData3,
              setChartData3,
              chartData4,
              setChartData4,
              button3,
              setButton3,
              button4,
              setButton4
            );
          }}
          className="tab bg-gradient-to-br from-[#ffffffce] to-[#030169] font-legend rounded-md p-1 text-white h-full min-w-28 shadow-inner flex justify-center items-center"
        >
          {button3}
        </button>
      </div>
      <div
        id="mainGraph"
        className="graph shadow-inner shadow-slate-600 rounded-md bg-gradient-to-tr from-[#000000] to-[#1a1919] py-5 h-3/5 w-full text-white flex justify-center items-center px-5"
      >
        <DynamicChart id={"mainGraph"} chartData={chartData4} />
      </div>
    </div>
  );
};

export default ComparisonMetrics;
