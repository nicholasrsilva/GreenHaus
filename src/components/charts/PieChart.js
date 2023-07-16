import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const PieChartComponent = ({ data }) => {
  return (
    <div>
      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Legend verticalAlign="bottom" height={36} />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
