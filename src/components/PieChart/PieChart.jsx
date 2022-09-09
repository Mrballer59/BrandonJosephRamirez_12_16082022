import "./PieChart.css";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

function ScoreChart(data) {
  console.log(data);

  //formatted way to get the score
  //you need to * it by 100 to get a full number.
  const topScore = {
    score: 100,
    fill: "#FBFBFB",
  };

  const formatterPercent = {
    score: data.data * 100,
    fill: "#FF0000",
  };

  return (
    <div className="todayScore">
      <h2>{data.title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={[topScore, formatterPercent]}
          startAngle={90}
          endAngle={449}
        >
          <RadialBar dataKey="score" cornerRadius={10} />
          <circle cx="50%" cy="50%" fill="white" r="80"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
      <p>
        <span className="scorePercent">{formatterPercent.score}%</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  );
}
export default ScoreChart;
