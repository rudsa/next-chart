import React, { useState } from "react";
import ChartExample from "@/src/components/ChartExample";

const lineBasicSeries = [
  {
    name: "",
    data: [0],
  },
];

const barBasicSeries = [
  {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
];

const randomLineData = () => {
  const randomLineArrayData = [];
  for (let i = 0; i <= 5; i++) {
    randomLineArrayData.push(Math.floor(Math.random() * 11));
  }
  return [
    {
      name: "testData",
      data: randomLineArrayData,
    },
  ];
};

const randomBarData = () => {
  const randomBarArrayData = [];
  for (let i = 0; i <= 5; i++) {
    randomBarArrayData.push(Math.floor(Math.random() * 101) + 10);
  }
  return [
    {
      data: randomBarArrayData,
    },
  ];
};

const Home = () => {
  const [chartType, setChartType] = useState("line");
  const [lineChartSeries, setLineChartSeries] = useState(lineBasicSeries);
  const [barChartSeries, setBarChartSeries] = useState(barBasicSeries);
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
          // setLineChartSeries(randomLineData())
          chartType === "line"
            ? setLineChartSeries(randomLineData())
            : setBarChartSeries(randomBarData());
        }}
      >
        Update Data
      </button>
      <ChartExample
        chartType={chartType}
        lineChartSeries={lineChartSeries}
        barChartSeries={barChartSeries}
      />
    </div>
  );
};

export default Home;
