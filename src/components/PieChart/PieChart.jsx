import "./PieChart.css";
import propTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
/**
 *
 * @param {Oject} userMainData
 * @returns {JSX}
 */
const ScoreChart = ({ userMainData }) => {
  //you need to * it by 100 to get a full number.
  const topScore = [
    {
      scoreUV: 100,
      fill: "#FBFBFB",
    },
    {
      scoreUV: userMainData.todayScore * 100 || userMainData.score * 100,
      fill: "#FF0000",
    },
  ];
  return (
    <div className="todayScore">
      <h2>score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={topScore}
          startAngle={90}
          endAngle={449}
        >
          <RadialBar dataKey="scoreUV" cornerRadius={10} />
          <circle cx="50%" cy="50%" fill="white" r="75"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
      <p>
        <span className="scorePercent">
          {userMainData.todayScore * 100 || userMainData.score * 100}%
        </span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  );
};
export default ScoreChart;
ScoreChart.propTypes = {
  userMainData: propTypes.object,
};
