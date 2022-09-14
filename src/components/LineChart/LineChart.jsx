import "./LineChart.css";
import propTypes from "prop-types";
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

/**
 *
 * @param {Object} userSessions Necessary keyword to pass data to the components
 * @param {Array} payload
 * @param {Boolean} active Necessary keyword to is used for custom tooltip for the hover to show each session
 * @returns React line Chart components using Recharts
 */
function SessionsChart({ userSessions }) {
  console.log(userSessions);
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
          <p className="lable">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="averageSessions">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer
        width="90%"
        height="90%"
        className="averageResponsive"
      >
        <LineChart
          data={userSessions.sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: "#ffffff", opacity: 0.5 }}
            tickLine={{ stroke: "" }}
            axisLine={{ stroke: "" }}
            tickFormatter={listedDays}
          />
          <YAxis hide={true} domain={["dataMin -15", "dataMax + 45"]} />
          <Tooltip
            content={CustomToolTip}
            cursor={false}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SessionsChart;
SessionsChart.prototypes = {
  userSessions: propTypes.object.isRequired,
  active: propTypes.bool,
  payload: propTypes.array,
};
