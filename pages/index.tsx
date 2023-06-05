import React, { useState } from "react";
import ChartExample from "@/src/components/ChartExample";

const lineBasicSeries = [
  {
    name: "testData",
    data: [
      { x: "test1", y: 10 },
      { x: "test2", y: 60 },
      { x: "test3", y: 30 },
      { x: "test4", y: 120 },
      { x: "test5", y: 75 },
      { x: "test6", y: 12 },
      { x: "test7", y: 32 },
    ],
  },
];

const barBasicSeries = [
  {
    data: [
      { x: "test1", y: 10 },
      { x: "test2", y: 20 },
      { x: "test3", y: 30 },
      { x: "test4", y: 90 },
      { x: "test5", y: 130 },
      { x: "test6", y: 260 },
      { x: "test7", y: 220 },
    ],
  },
];

const updateLineData = () => {
  return [
    {
      name: "testData",
      data: [
        { x: "test1", y: 100 },
        { x: "test2", y: 890 },
        { x: "test3", y: 56 },
        { x: "test4", y: 210 },
        { x: "test5", y: 567 },
        { x: "test6", y: 268 },
        { x: "test7", y: 66 },
      ],
    },
  ];
};

const updateBarData = () => {
  const randomBarArrayData = [
    { x: "test1", y: 30 },
    { x: "test2", y: 100 },
    { x: "test3", y: 130 },
    { x: "test4", y: 60 },
    { x: "test5", y: 30 },
    { x: "test6", y: 200 },
    { x: "test7", y: 230 },
  ];

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
          chartType === "line"
            ? setLineChartSeries(updateLineData())
            : setBarChartSeries(updateBarData());
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
