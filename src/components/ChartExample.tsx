import LineChartExmaple from "./LineChartExample";
import BarChartExmaple from "./BarChartExample";

type Props = {
  chartType?: string;
  lineChartSeries?: any;
  barChartSeries?: any;
};

const ChartExample = ({
  chartType,
  lineChartSeries,
  barChartSeries,
}: Props) => {
  return (
    <div>
      {chartType === "line" ? (
        <LineChartExmaple lineChartSeries={lineChartSeries} />
      ) : (
        <BarChartExmaple barChartSeries={barChartSeries} />
      )}
    </div>
  );
};

export default ChartExample;
