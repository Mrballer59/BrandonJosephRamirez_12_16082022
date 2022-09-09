import React from "react";
import "./RadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

//destructuring the data and getting the "kind" to display the data

//({ data: { kind } })
/**
 * 
 * @param {Object} props keyword used to pass data to the component 
 * @param {Object} props .data is used to pass data to the component
 
 * @returns React radar chart component using Recharts
 */
const WrapperRadarChart = () => {
  const data = [
    {
      subject: "Intensité",
      A: 90,
    },
    {
      subject: "Vitesse",
      A: 200,
    },
    {
      subject: "Force",
      A: 50,
    },
    {
      subject: "Endurance",
      A: 140,
    },
    {
      subject: "Energie",
      A: 120,
    },
    {
      subject: "Cardio",
      A: 80,
    },
  ];
  //GETTING THE CORRECT LIST MAYBE NEED TO GRAB THE
  //LIST OF ARRY AND MAKE A NEW DATA AND PASS IT THROUGH
  console.log();

  return (
    <div className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject" //try kind also
            //tickFormatter={() => {}}
            tick={{ fill: "#ffffff" }}
            tickCount={6}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="RadarActivity"
            dataKey="A"
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
