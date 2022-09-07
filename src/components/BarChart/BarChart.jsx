import "./BarChart.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ActivityChartBar(props) {
  const formatterDate = (item) => new Date(item).getDate();
  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <span className="lable">{`${payload[0].value}kg`}</span>
          <span className="lable">{`${payload[1].value}Kcal`}</span>
        </div>
      );
    }
    return null;
  };
  // console.log(props);
  return (
    <div className="activityChartBar">
      <div className="activityChartHeader">
        <h2>{props.title}</h2>
        <ul>
          <li className="blackCircle">{props.legendDataKg}</li>
          <li className="redCircle">{props.legendData2}</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={props.data}
          margin={{
            top: 20,
            left: 5,
          }}
          barGap={7}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey={props.xDataKey}
            tickLine={false}
            tickFormatter={formatterDate}
          />
          <YAxis
            dataKey={props.dataKg}
            yAxisId="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={["dataMin-2", "dataMax+2"]}
            tickCount={5}
          />
          <YAxis
            dataKey={props.dataCal}
            axisLine={false}
            tickLine={false}
            hide={true}
            yAxisId="calories"
            orientation="right"
            domain={["dataMin-50", "dataMax+50"]}
          />
          <Tooltip
            content={<CustomToolTip />}
            // cursor={{ fill: "#C4C4C4", width: 65, transform: "translate(28)" }}
          />
          {/* <Legend /> */}
          <Bar
            dataKey={props.dataKg}
            fill="#282D30"
            barSize={10}
            yAxisId="kilogram"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey={props.dataCal}
            fill="#E60000"
            yAxisId="calories"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default ActivityChartBar;
