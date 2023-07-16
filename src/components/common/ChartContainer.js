import React from 'react';
import LineChart from '../charts/LineChart';
import CardContainer from '../common/CardContainer';
import './CardContainer.css'
const ChartContainer = () => {
  const generateTemperatureData = (lowerBoundary, upperBoundary) => {
    const generateHour = (hour) => {
      return hour.toString().padStart(2, "0") + ":00";
    };

    const data = Array.from({ length: 24 }, (_, hour) => ({
      name: generateHour(hour),
      temp: lowerBoundary + Math.random() * (upperBoundary-lowerBoundary), // Generate random temperature values between 60 and 70
    }));

    return data;
  };

  const chartCollection = [
    {
      title: "Temperature",
      description: "The best temperature range for growing blueberries is between 60°F (15.6°C) and 70°F (21.1°C).",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    // ... other chart objects
  ];

  return (
    <div className="card-container">
      {chartCollection.map((chart, index) => (
          <CardContainer 
          title={chart.title} 
          description={chart.description} 
          graph={chart.chart}/>
        
      ))}
    </div>
  );
};

export default ChartContainer;
