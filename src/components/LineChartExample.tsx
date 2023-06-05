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
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          //   custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          //     return (
          //       '<div class="arrow_box">' +
          //       "<span>" +
          //       series[seriesIndex][dataPointIndex] +
          //       "</span>" +
          //       "</div>"
          //     );
          //   },
          theme: "dark",

          fillSeriesColor: false,
          style: {
            fontSize: "16px",
            fontFamily: undefined,
          },
          onDatasetHover: {
            highlightDataSeries: false,
          },
          x: {
            show: true,
            format: "dd MMM",
            formatter: undefined,
          },
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          z: {
            formatter: undefined,
            title: "Size: ",
          },
          marker: {
            show: true,
          },
          items: {
            display: "flex",
          },
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
        },
      }}
    />
  );
};

export default LineChartExmaple;
