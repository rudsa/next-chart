import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  lineChartSeries?: any;
};

const LineChartExmaple = ({ lineChartSeries }: Props) => {
  return (
    <ApexCharts
      type={"line"}
      height={350}
      series={lineChartSeries}
      options={{
        chart: {
          height: 150,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Product Trends by Month",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
        },
      }}
    />
  );
};

export default LineChartExmaple;
