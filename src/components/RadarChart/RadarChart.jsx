import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function RadaRactivityChart(data) {
  console.log(data.data.kind);
  //map trho
  function getTicks() {
    data.data.kind.map();
  }
  return (
    <div className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar
            name="radarActivity"
            dataKey="value"
            stroke=""
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadaRactivityChart;
