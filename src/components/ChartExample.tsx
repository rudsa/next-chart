import LineChartExmaple from "./LineChartExample";
import BarChartExmaple from "./BarChartExample";

type Props = {
  chartType?: string;
};

const ChartExample = ({ chartType }: Props) => {
  return (
    <div>
      {chartType === "line" ? <LineChartExmaple /> : <BarChartExmaple />}
    </div>
  );
};

export default ChartExample;
