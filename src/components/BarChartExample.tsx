import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  barChartSeries?: any;
};

const BarChartExmaple = ({ barChartSeries }: Props) => {
  console.log(barChartSeries);
  return (
    <ApexCharts
      type={"bar"}
      height={350}
      series={barChartSeries}
      options={{
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          //   categories: [
          //     "South Korea",
          //     "Canada",
          //     "United Kingdom",
          //     "Netherlands",
          //     "Italy",
          //     "France",
          //     "Japan",
          //     "United States",
          //     "China",
          //     "Germany",
          //   ],
        },
      }}
    />
  );
};

export default BarChartExmaple;
