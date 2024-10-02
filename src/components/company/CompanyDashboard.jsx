import React, { useEffect, useState } from "react";
import DynamicChart from "./DynamicChart";
import { useParams } from "react-router-dom";

const CompanyDashboard = ({ isDarkMode, toggleTheme }) => {
  const { companyId } = useParams();
  console.log(companyId);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      title: { text: "Year" },
    },
    yAxis: {
      title: { text: "Stock Price" },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    series: [
      {
        name: "Stock Price",
        data: [],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: { radius: 2 },
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
      text: "Revenue",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: { text: "Year" },
    },
    yAxis: {
      title: { text: "Revenue" },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    series: [
      {
        name: "Revenue",
        data: [],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: { radius: 2 },
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
      text: "Expenses",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: { text: "Year" },
    },
    yAxis: {
      title: { text: "Expenses" },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    series: [
      {
        name: "Expenses",
        data: [],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: { radius: 2 },
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
      text: "Market Share",
      align: "center",
      style: {
        color: "rgba(216,210,250,1)",
      },
    },
    xAxis: {
      title: { text: "Year" },
    },
    yAxis: {
      title: { text: "Market Share" },
      gridLineWidth: 0,
      lineWidth: 1,
      color: "white",
    },
    series: [
      {
        name: "Market Share",
        data: [],
        color: "rgb(24,254,254)",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgba(0, 5, 107, 1)"],
            [1, "rgba(0, 0, 0, 0.5)"],
          ],
        },
        marker: { radius: 2 },
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

  const swapData = (data1, setData1, data2, setData2) => {
    const temp = data1;
    setData1(data2);
    setData2(temp);
  };

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/company/getcomapnydetails/${companyId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setCompanyDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [companyId]);


  useEffect(() => {
    if (companyDetails) {
      setChartData1((prevData) => ({
        ...prevData,
        series: [
          {
            ...prevData.series[0],
            data: companyDetails.Stock_Price || [], 
          },
        ],
      }));

      setChartData2((prevData) => ({
        ...prevData,
        series: [
          {
            ...prevData.series[0],
            data: companyDetails.Revenue || [],
          },
        ],
      }));

      setChartData3((prevData) => ({
        ...prevData,
        series: [
          {
            ...prevData.series[0],
            data: companyDetails.Expenses || [],
          },
        ],
      }));

      setChartData4((prevData) => ({
        ...prevData,
        series: [
          {
            ...prevData.series[0],
            data: companyDetails.Market_Share || [],
          },
        ],
      }));
    }
  }, [companyDetails]);


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

  if (loading) {
    return <div className="text-xl text-blue-600 font-poppins text-center">Loading company details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className={`h-screen ${isDarkMode ? "bg-gradient-to-tr from-[#000000] to-[#000000ee]" : "bg-white"}`}>
      <div className={`heading w-full py-3 ${isDarkMode ? "text-slate-400 hover:text-[rgb(216,210,250)]" : "text-zinc-500 hover:text-gray-900"} font-lexend font-extralight flex justify-center items-center text-5xl mb-6`}>
        COMPANY DASHBOARD
      </div>
      <div className="main-content  flex h-1/2 gap-x-2 justify-around mb-6">
        <div className="left-content w-[30%]  flex flex-col gap-y-4 ">
          <div className="relative h-1/2">
            <div className={`name top-2 shadow-inner h-full rounded-md flex flex-col justify-center items-left backdrop-blur-sm bg-transparent gap-y-4 ${isDarkMode ? "shadow-[#444444]" : "shadow-[#bfbfbf]"}`}>
              <div className={`company-name ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} pl-4 text-3xl font-lexend`}>
                {companyDetails.Name}
              </div>
              <div className="country-name pl-4">
                <span className={`text-2xl ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "}`}>{companyDetails.Country}</span>
                <span className={`text-sm px-2 ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "}`}>({companyDetails.Country_Code})</span>
              </div>
            </div>
            <div className={`absolute rounded-md top-0 left-0 w-full h-full hover:opacity-100 ${isDarkMode ? "bg-gradient-to-tr from-transparent to-[#3405b491] via-transparent" : "bg-gradient-to-tr from-transparent to-[#34e0f391] via-transparent"}`}></div>
          </div>
          <div className="relative h-1/2">
            <div className={`fixed-data top-2 shadow-inner h-full rounded-md flex  justify-center items-center backdrop-blur-sm bg-transparent gap-x-3 px-2 ${isDarkMode ? "shadow-[#444444]" : "shadow-[#bfbfbf]"}`}>
              <div className={`shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"} h-3/5 w-full rounded-lg`}>
                <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-xl  h-4/5 flex items-center justify-center rounded-b-lg`}>
                  ${companyDetails.Market_Cap}
                </div>
                <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-sm `}>
                  Market Capital
                </div>
              </div>
              <div className={`shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"} h-3/5 w-full rounded-lg`}>
                <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl  h-4/5 flex items-center justify-center rounded-b-lg`}>
                  {companyDetails.Diversity}%
                </div>
                <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-sm `}>
                  Diversity
                </div>
              </div>
              <div className={`shadow-inner ${isDarkMode ? "shadow-[#281f47] bg-[#000000]" : "shadow-[#8aadbe] bg-[#ffffff]"} h-3/5 w-full rounded-lg`}>
                <div className={`value ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} font-proguerr text-3xl  h-4/5 flex items-center justify-center rounded-b-lg`}>
                  53+
                </div>
                <div className={`quantity ${isDarkMode ? "text-[#18FEFE] " : "text-[#1a87cb] "} h-1/5  flex justify-center rounded-b-lg text-sm `}>
                  <span>
                    Firms <sub className=" text-[10px]">({companyDetails.Country_Code})</sub>
                  </span>
                </div>
              </div>
            </div>
            <div className={`absolute rounded-md top-0 left-0 w-full h-full ${isDarkMode ? "bg-gradient-to-tr from-transparent to-[#3405b491] via-transparent" : "bg-gradient-to-tr from-transparent to-[#34e0f391] via-transparent"}`}></div>
          </div>
        </div>
        <div
          id="mainGraph"
          className={`right-content w-[65%] shadow-inner rounded-md p-4 flex justify-center items-center ${isDarkMode ? "text-white bg-gradient-to-tr from-[#000000] to-[#1a1919] shadow-slate-600" : "text-black bg-gradient-to-tr from-[#ffffff] to-[#d6e2e8] shadow-slate-400"}`}
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
          className={`sub-graph h-4/5 w-full shadow-inner rounded-md ${isDarkMode ? "text-white bg-gradient-to-tr from-[#000000] to-[#1a1919] shadow-slate-600" : "text-black bg-gradient-to-tr from-[#ffffff] to-[#d6e2e8] shadow-slate-400"}`}
        >
          <DynamicChart id="sub-graph1" chartData={chartData2} />
        </div>
        <div
          id="sub-graph2"
          onClick={() =>
            swapData(chartData3, setChartData3, chartData1, setChartData1)
          }
          className={`sub-graph h-4/5 w-full shadow-inner rounded-md ${isDarkMode ? "text-white bg-gradient-to-tr from-[#000000] to-[#1a1919] shadow-slate-600" : "text-black bg-gradient-to-tr from-[#ffffff] to-[#d6e2e8] shadow-slate-400"}`}
        >
          <DynamicChart id="sub-graph2" chartData={chartData3} />
        </div>
        <div
          id="sub-graph3"
          onClick={() =>
            swapData(chartData4, setChartData4, chartData1, setChartData1)
          }
          className={`sub-graph h-4/5 w-full shadow-inner rounded-md ${isDarkMode ? "text-white bg-gradient-to-tr from-[#000000] to-[#1a1919] shadow-slate-600" : "text-black bg-gradient-to-tr from-[#ffffff] to-[#d6e2e8] shadow-slate-400"}`}
        >
          <DynamicChart id="sub-graph3" chartData={chartData4} />
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
