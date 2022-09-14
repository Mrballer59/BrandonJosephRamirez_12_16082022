import "./BarChart.css";
import React from "react";
import propTypes from "prop-types";
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
 *
 * @param {Object} props .data is for the daily-activity data used for the barChart
 * @param {String} .xDataKey name of the data used for the X axis
 *
 * CustomToolTip with weight
 * @param {String} formatterDate is used for the new date dynamically
 * @param {Boolean} active is used for custom tooltip for the hover to show each session
 * @param {Array} payload is used for custom tooltip for the hover to show each session
 * @returns {JSX} React BarChart component using Recharts
 */
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
/**
 *
 * @param {Object} userActivity The necessary keyword that we use to pass data through our component from the top of the tree
 * @returns React BarChart component using Recharts
 */
function ActivityChartBar({ userActivity }) {
  return (
    <div className="activityChartBar">
      <div className="activityChartHeader">
        <h2>Activité quotidienne</h2>
        <ul>
          <li className="blackCircle">Poids (kg)</li>
          <li className="redCircle">Calories brülées (kCal)</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={userActivity.sessions}
          margin={{
            top: 20,
            left: 5,
          }}
          barGap={7}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} tickFormatter={formatterDate} />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={["dataMin-2", "dataMax+2"]}
            tickCount={5}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            hide={true}
            yAxisId="calories"
            orientation="right"
            domain={["dataMin-50", "dataMax+50"]}
            tickCount={3}
          />
          <Tooltip
            content={<CustomToolTip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            yAxisId="kilogram"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="calories"
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
