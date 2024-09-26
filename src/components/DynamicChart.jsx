import Highcharts from "highcharts";
import React, { useEffect } from "react";

const DynamicChart = ({ id, chartData }) => {
  useEffect(() => {
    Highcharts.chart(id, {
      ...chartData,
    });
  }, [id, chartData]);

  return <div id={id}></div>;
};

export default DynamicChart;
