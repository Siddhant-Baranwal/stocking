import React, { useState, useEffect } from "react";
import DynamicChart from "./DynamicChart";

const ComparisonMetrics = ({ isDarkMode, toggleTheme }) => {
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

  useEffect(() => {
    setChartData1((prevData) => ({
      ...prevData,
      title: {
        ...prevData.title,
        style: {
          color: isDarkMode ? "rgba(216,210,250,1)" : "rgba(100,145,195,1)",
        },
      },
      series: [
        {
          ...prevData.series[0],
          color: isDarkMode ? "rgba(24,254,254,1)" : "#1674ae",
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, isDarkMode ? "rgba(0, 5, 107, 1)" : "#4ea8de"], 
              [1, isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"],
            ],
          },
        },
      ],
    }));

    setChartData2((prevData) => ({
      ...prevData,
      title: {
        ...prevData.title,
        style: {
          color: isDarkMode ? "rgba(216,210,250,1)" : "rgba(100,145,195,1)",
        },
      },
      series: [
        {
          ...prevData.series[0],
          color: isDarkMode ? "rgba(24,254,254,1)" : "#1674ae",
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, isDarkMode ? "rgba(0, 5, 107, 1)" : "#4ea8de"], 
              [1, isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"],
            ],
          },
        },
      ],
    }));

    setChartData3((prevData) => ({
      ...prevData,
      title: {
        ...prevData.title,
        style: {
          color: isDarkMode ? "rgba(216,210,250,1)" : "rgba(100,145,195,1)",
        },
      },
      series: [
        {
          ...prevData.series[0],
          color: isDarkMode ? "rgba(24,254,254,1)" : "#1674ae",
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, isDarkMode ? "rgba(0, 5, 107, 1)" : "#4ea8de"], 
              [1, isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"],
            ],
          },
        },
      ],
    }));

    setChartData4((prevData) => ({
      ...prevData,
      title: {
        ...prevData.title,
        style: {
          color: isDarkMode ? "rgba(216,210,250,1)" : "rgba(100,145,195,1)",
        },
      },
      series: [
        {
          ...prevData.series[0],
          color: isDarkMode ? "rgba(24,254,254,1)" : "#1674ae",
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, isDarkMode ? "rgba(0, 5, 107, 1)" : "#4ea8de"], 
              [1, isDarkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"],
            ],
          },
        },
      ],
    }));
  }, [isDarkMode]);

  return (
    <div className={`h-screen ${isDarkMode ? "bg-gradient-to-tr from-[#000000] to-[#000000ee]" : "bg-white"} flex flex-col justify-center px-10`}>
      <div className={`heading w-full py-3 ${isDarkMode ? "text-slate-400 hover:text-[rgb(216,210,250)]" : "text-zinc-500 hover:text-gray-900"} font-lexend font-extralight flex justify-center items-center text-5xl mb-6`}>
        Comparision Metrics
      </div>
      <div className={`tabs flex w-fit px-3 py-3 gap-10 mt-2 mb-5 rounded-md ${isDarkMode ? "bg-[#111111]" : "bg-[#f4f4f4]"}`}>
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
          className={`tab ${isDarkMode ? "bg-gradient-to-br from-[#ffffffce] to-[#030169] text-white" : "bg-gradient-to-br from-[#ffffffce] to-[#30bafe] text-black"} rounded-md p-1 font-legend h-full min-w-28 shadow-inner flex justify-center items-center`}
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
          className={`tab ${isDarkMode ? "bg-gradient-to-br from-[#ffffffce] to-[#030169] text-white" : "bg-gradient-to-br from-[#ffffffce] to-[#30bafe] text-black"} rounded-md p-1 font-legend h-full min-w-28 shadow-inner flex justify-center items-center`}
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
          className={`tab ${isDarkMode ? "bg-gradient-to-br from-[#ffffffce] to-[#030169] text-white" : "bg-gradient-to-br from-[#ffffffce] to-[#30bafe] text-black"} rounded-md p-1 font-legend h-full min-w-28 shadow-inner flex justify-center items-center`}
        >
          {button3}
        </button>
      </div>
      <div
        id="mainGraph"
        className={`graph shadow-inner rounded-md ${isDarkMode ? "text-white bg-gradient-to-tr from-[#000000] to-[#1a1919] shadow-slate-600" : "text-black bg-gradient-to-tr from-[#ffffff] to-[#d6e2e8] shadow-slate-300"} py-5 h-3/5 w-full flex justify-center items-center px-5`}
      >
        <DynamicChart id={"mainGraph"} chartData={chartData4} />
      </div>
    </div>
  );
};

export default ComparisonMetrics;
