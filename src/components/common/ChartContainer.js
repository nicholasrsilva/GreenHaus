import React from 'react';
import LineChart from '../charts/LineChart';
import CardContainer from '../common/CardContainer';
import './CardContainer.css'
const ChartContainer = ({ cardData }) => {



  return (
    <div className="card-container">
      {cardData.map((chart, index) => (
        <CardContainer
          key={index} // Make sure to provide a unique key for each CardContainer
          title={chart.title}
          description={chart.description}
          graph={chart.chart}
        />

      ))}

    </div>
  );
};

export default ChartContainer;
