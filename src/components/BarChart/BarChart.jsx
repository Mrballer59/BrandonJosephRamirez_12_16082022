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
function ActivityChartBar(data) {
  console.log(data);
  return (
    <div className="ActivityChartBar">
      <div className="ActivityChartHeader">
        <h2>{data.title}</h2>
        <ul>
          <li className="blackCircle">{data.dataWeightAbri}</li>
          <li className="redCircle">{data.dataCaloriesAbri}</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.data} margin={{ top: 20, left: 5 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey={data.xDataKey} tickLine={false} />
          <YAxis
            datakey={data.dataWeight}
            orientation="right"
            axisLine={false}
            tickLine={false}
          />
          {/* <YAxis datakey={data.dataCalories} hide={true} /> */}
          <Tooltip />
          <Legend />
          <Bar
            dataKey={data.dataWeight}
            fill="#282D30"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey={data.dataCalories}
            fill="#E60000"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default ActivityChartBar;
