import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChartExmaple = () => {
  return (
    <ApexCharts
      type={"line"}
      height={350}
      series={[
        {
          name: "Desktops",
          data: [
            { x: "Jan", y: 10 },
            { x: "Feb", y: 30 },
            { x: "Mar", y: 40 },
            { x: "Apr", y: 5 },
            { x: "May", y: 3 },
            { x: "Jul", y: 80 },
            { x: "Aug", y: 95 },
            { x: "Sep", y: 118 },
          ],
        },
      ]}
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
