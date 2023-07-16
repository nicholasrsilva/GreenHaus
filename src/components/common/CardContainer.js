import React from 'react';
import { Card } from 'antd';
import './CardContainer.css';

const MyCardComponent = ({ title, description, graph }) => {
  return (
    <Card className="card-container">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="graph">
        {graph}
      </div>
    </Card>
  );
};

export default MyCardComponent;
