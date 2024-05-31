import React from 'react'
import {
  BarChart,
  Bar,
  Cell,
} from "recharts";

const colors = ["red", "blue", "green", "red", "green", "blue", "red"];

const data = [
  {
    pv: 5500,
    amt: 2400,
  },
  {
    pv: 9300,
    amt: 2210,
  },
  {
    pv: 9800,
    amt: 2290,
  },
  {
    pv: 6800,
    amt: 2000,
  },
  {
    pv: 7700,
    amt: 2181,
  },
  {
    pv: 9400,
    amt: 2500,
  },
  {
    pv: 8800,
    amt: 2100,
  },
];
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#f0f0f0" rx={10} ry={10} />
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={10} ry={10} />
    </g>
  );
};

const FirstChart = () => {
  return (
    <BarChart
      width={520}
      height={120}
      data={data}
      margin={{
        top: 5,
        right: 200,
        left: 180,
        bottom: 5,
      }}
    >
      <Bar
        dataKey="pv"
        shape={<CustomBar />}
        fill="#8884d8"
        background={{ fill: "#374151" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  )
}

export default FirstChart;