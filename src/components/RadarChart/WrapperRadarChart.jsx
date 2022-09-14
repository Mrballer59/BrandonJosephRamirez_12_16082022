import React from "react";
import "./RadarChart.css";
import propTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * frenchTitle converts english into french
 * @param {String} title  seeting used for chaning titles
 * @param {String} frenchTitle  is a varible to translate into french
 * @returns React radar chart component using Recharts
 */
const WrapperRadarChart = ({ userPerformance }) => {
  const translatedTitle = (title) => userPerformance.kind[title];
  const tranlate = {
    intensity: "Intensité",
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
  };
  const frenchTitle = (title) => tranlate[translatedTitle(title)];

  return (
    <div className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius="66%"
          startAngle={-150}
          endAngle={+210}
          data={userPerformance.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#ffffff" }}
            tickFormatter={frenchTitle}
            tickLine={false}
            fontSize={12}
            // tickCount={6}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            name="RadarActivity"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WrapperRadarChart;
