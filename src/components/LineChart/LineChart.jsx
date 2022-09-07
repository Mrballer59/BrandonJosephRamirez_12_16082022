import "./LineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SessionsChart(data) {
  console.log(data);
  const daysWeek = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  const listedDays = (days) => daysWeek[days];

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customToolTip">
          <p className="lable">{`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="averageSessions">
      <h2>{data.title}</h2>
      <ResponsiveContainer width="100%" height="50%">
        <LineChart
          data={data.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey={data.xDataKey}
            tick={{ fill: "#ffffff" }}
            tickLine={{ stroke: "" }}
            axisLine={{ stroke: "" }}
            tickFormatter={listedDays}
          />
          <YAxis hide={true} />
          <Tooltip content={CustomToolTip} cursor={false} />
          <Line
            type="monotone"
            dataKey={data.dataLength}
            stroke="#ffffff"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SessionsChart;
