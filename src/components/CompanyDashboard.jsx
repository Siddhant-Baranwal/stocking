import React, { useState } from "react";
import DynamicChart from "./DynamicChart";

const CompanyDashboard = () => {
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

  //to swap charts
  const swapData = (data1, setData1, data2, setData2) => {
    const temp = data1;
    setData1(data2);
    setData2(temp);
  };

  return (
    <div className="h-screen bg-gradient-to-tr from-[#000000] to-[#000000ee]">
      <div className="heading  w-full py-3  text-slate-400 hover:text-[rgb(216,210,250)] font-lexend font-extralight flex justify-center items-center text-5xl mb-6">
        COMPANY DASHBOARD
      </div>
      <div className="main-content  flex h-1/2 gap-x-2 justify-around mb-6">
        <div className="left-content w-[30%]  flex flex-col gap-y-4 ">
          <div className="relative h-1/2">
            <div className="name top-2 shadow-[#444444] shadow-inner h-full rounded-md flex flex-col justify-center items-left backdrop-blur-sm bg-transparent gap-y-4">
              <div className="company-name text-[#18fefe] pl-4 text-3xl font-lexend">
                AMAZON
              </div>
              <div className="country-name pl-4">
                <span className="text-2xl text-[#18FEFE]">United States</span>
                <span className="text-sm px-2 text-[#9bccfa]">(U.S.A)</span>
              </div>
            </div>
            <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-[#3405b491] via-transparent hover:opacity-100"></div>
          </div>
          <div className="relative h-1/2">
            <div className="fixed-data top-2 shadow-[#444444] shadow-inner h-full rounded-md flex  justify-center items-center backdrop-blur-sm bg-transparent gap-x-3 px-2">
              <div className="market shadow-inner shadow-[#281f47] h-3/5 w-full rounded-lg bg-[#000000]">
                <div className="value text-[#18FEFE] font-proguerr text-xl  h-4/5 flex items-center justify-center rounded-b-lg">
                  $123.4B
                </div>
                <div className="quantity text-[#18FEFE] h-1/5  flex justify-center rounded-b-lg text-sm ">
                  Market Capital
                </div>
              </div>
              <div className="diversity  shadow-inner shadow-[#281f47] h-3/5 w-full rounded-lg bg-[#000000]">
                <div className="value text-[#18FEFE] font-proguerr text-3xl  h-4/5 flex items-center justify-center rounded-b-lg">
                  53 %
                </div>
                <div className="quantity text-[#18FEFE] h-1/5  flex justify-center rounded-b-lg text-sm ">
                  Diversity
                </div>
              </div>
              <div className="diversity  shadow-inner shadow-[#281f47] h-3/5 w-full rounded-lg bg-[#000000]">
                <div className="value text-[#18FEFE] font-proguerr text-3xl  h-4/5 flex items-center justify-center rounded-b-lg">
                  53+
                </div>
                <div className="quantity  text-[#18FEFE] h-1/5  flex justify-center rounded-b-lg text-sm ">
                  <span>
                    Firms <sub className=" text-[10px]">(USA)</sub>
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute rounded-md top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-[#3405b491] via-transparent "></div>
          </div>
        </div>
        <div
          id="mainGraph"
          className="right-content w-[65%] shadow-inner shadow-slate-600 rounded-md bg-gradient-to-tr from-[#000000] to-[#1a1919] p-4 flex justify-center items-center text-white"
        >
          <DynamicChart id="mainGraph" chartData={chartData1} />
        </div>
      </div>
      <div className="sub-graphs flex justify-center items-center gap-x-2 px-3 py-3  h-[36%]">
        <div
          id="sub-graph1"
          onClick={() =>
            swapData(chartData2, setChartData2, chartData1, setChartData1)
          }
          className="sub-graph text-white h-4/5 w-full  shadow-inner shadow-slate-600 rounded-md bg-gradient-to-tr from-[#000000] to-[#1a1919]"
        >
          <DynamicChart id="sub-graph1" chartData={chartData2} />
        </div>
        <div
          id="sub-graph2"
          onClick={() =>
            swapData(chartData3, setChartData3, chartData1, setChartData1)
          }
          className="sub-graph text-white h-4/5 w-full  shadow-inner shadow-slate-600 rounded-md bg-gradient-to-tr from-[#000000] to-[#1a1919]"
        >
          <DynamicChart id="sub-graph2" chartData={chartData3} />
        </div>
        <div
          id="sub-graph3"
          onClick={() =>
            swapData(chartData4, setChartData4, chartData1, setChartData1)
          }
          className="sub-graph text-white h-4/5 w-full  shadow-inner shadow-slate-600 rounded-md bg-gradient-to-tr from-[#000000] to-[#1a1919]"
        >
          <DynamicChart id="sub-graph3" chartData={chartData4} />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
