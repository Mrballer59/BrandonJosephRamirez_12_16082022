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
/**
 * BarChart Part
 * @param {Object} props The necessary keyword that we use to pass data through our component
 * @param {Object} props .data is for the daily-activity data used for the barChart
 * @param {String} props .dataKg data used for the black bars kg
 * @param {String} props .dataCal data used for the red bars cal
 * @param {String} props .legendDataKg is the Legend from dataKg
 * @param {String} props .legendData2 is the legend from dataCal
 * @param {String} props .title is the Title of the chart
 * @param {String} props .xDataKey name of the data used for the X axis
 * @returns React BarChart component using Recharts
 */
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
            wrapperStyle={{ outline: "none" }}
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
