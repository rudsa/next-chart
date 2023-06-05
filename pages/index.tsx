import React, { useState } from "react";
import ChartExample from "@/src/components/ChartExample";

const lineBasicSeries = [
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];

const lineUpdateSeries = [
  {
    name: "Update Desktops",
    data: [20, 30, 10, 5, 60, 70, 80, 23, 140],
  },
];

const barBasicSeries = [{}];

const Home = () => {
  const [chartType, setChartType] = useState("line");
  const [series, setSeries] = useState(lineBasicSeries);
  return (
    <div>
      <h2>Chart Example</h2>
      <button
        onClick={() => {
          setChartType("line");
        }}
      >
        Line
      </button>
      <button
        onClick={() => {
          setChartType("bar");
        }}
      >
        Bar
      </button>
      <button
        onClick={() => {
          setSeries(lineUpdateSeries);
        }}
      >
        Update Data
      </button>
      <ChartExample chartType={chartType} />
    </div>
  );
};

export default Home;
