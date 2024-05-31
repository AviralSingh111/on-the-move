import React from 'react';
import { BarChart, Bar, XAxis, YAxis,Tooltip} from 'recharts';

const data = [
  { name: 'A', value: 200 },
  { name: 'B', value: 50 },
  { name: 'C', value: 75 },
  { name: 'D', value: 30 },
];

const getColor = (value) => {
  if (value < 40) {
    return 'red';
  } else if (value < 80) {
    return 'yellow';
  } else {
    return 'green';
  }
};

const SecondChart = () => {
  return (
    <BarChart
      width={520}
      height={180}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="value"
        fill="#8884d8"
        shape={(props) => {
          const { x, y, width, height, value } = props;
          const fill = getColor(value);
          return <rect x={x} y={y} width={width} height={height} fill={fill} />;
        }}
      />
    </BarChart>
  );
};

export default SecondChart;
