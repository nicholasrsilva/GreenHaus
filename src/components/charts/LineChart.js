import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, ReferenceLine, YAxis } from 'recharts';

const LineChartComponent = ({ data, upperBoundary, lowerBoundary }) => {
  

  return (
    <div>
      <LineChart width={400} height={200} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="temp" stroke="#2196F3" strokeWidth={3} />
        <XAxis dataKey="name" />
        <YAxis dataKey="temp" />
        <ReferenceLine y={upperBoundary} stroke="red" />
        <ReferenceLine y={lowerBoundary} stroke="red" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
