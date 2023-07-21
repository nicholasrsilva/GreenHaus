import React, { useEffect, useRef, useState } from 'react';
import './EnviornmentCaptureResults.css';
import ChartContainer from '../../common/ChartContainer';
import LineChart from '../../charts/LineChart';

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

const EnviornmentCaptureResults = () => {
  const [activeElement, setActiveElement] = useState('graph1'); // Initial active element
  const [searchQuery, setSearchQuery] = useState('');



  


  // Function to handle element selection
  const handleElementSelect = (element) => {
    setActiveElement(element);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
   // Sample data for demonstration purposes
   const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    // ... add more items here
  ];

  // Filter the items based on the search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const EnviornmentFactors = [
    {
      title: "Temperature",
      description: "Both air and soil temperature affect plant growth. Different plants have specific temperature requirements for optimal growth, and extreme temperatures can cause stress or damage.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Humidity",
      description: "Humidity levels impact plant transpiration rates and water uptake. High humidity can lead to fungal diseases, while low humidity may cause water stress in plants.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Light",
      description: "The amount and intensity of light significantly influence photosynthesis, flowering, and fruiting in plants",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Rainfall/Rainwater",
      description: "The quantity and frequency of rainfall or irrigation directly affect soil moisture levels and plant water availability.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Wind",
      description: "Strong winds can lead to excessive transpiration and physical damage to plants.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    
    
  ];
  const SoilHealthNutrientsFactors = [
    {
      title: "Nitrogen (N)",
      description: "Both air and soil temperature affect plant growth. Different plants have specific temperature requirements for optimal growth, and extreme temperatures can cause stress or damage.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Phosphorous (P)",
      description: "Humidity levels impact plant transpiration rates and water uptake. High humidity can lead to fungal diseases, while low humidity may cause water stress in plants.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Potasium (K)",
      description: "The amount and intensity of light significantly influence photosynthesis, flowering, and fruiting in plants",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Rainfall/Rainwater",
      description: "The quantity and frequency of rainfall or irrigation directly affect soil moisture levels and plant water availability.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    },
    {
      title: "Wind",
      description: "Strong winds can lead to excessive transpiration and physical damage to plants.",
      chart: <LineChart data={generateTemperatureData(60,70)}  lowerBoundary={60} upperBoundary={70} />
    }, 
  ];
  const PlantInfo = [
    {
    title: "Plant Height",
    description: "23 ft",
  },
    {
      title: "Leaf Health",
      description: "Monitoring the condition of leaves helps detect nutrient deficiencies, pests, or diseases"
  },
  {
    title: "Flowering/Fruiting",
    description: "Observing the occurrence and frequency of flowering and fruiting stages is essential for evaluating plant health and reproductive success."
  },
  {
    title: "Growth Rate",
    description: "Analyzing the rate at which plants grow can provide valuable information about their response to environmental conditions"
  } 
  ];
  //Temp, humidity, co2, light, pH, Electrical Conductivity, oxygen
  return (
    <div className="container">
      <div className="section">
         {/* Search Bar */}
         <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          list="itemList" // Link the datalist with the input using 'list' attribute

        />
        {/* Datalist to render filtered items */}
        <datalist id="itemList">
          {filteredItems.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>

        <div className="graph-section">
        <div className="section-title">Charts for monitoring various aspects of plant growth: {searchQuery}</div>
        <h5>For reference: Anyone interested in growing their own plants can use this page to ensure optimal yield</h5>
          <button onClick={() => handleElementSelect('graph1')}>Environmental Factors</button>
          <button onClick={() => handleElementSelect('graph2')}>Soil Health and Nutrients</button>
          <button onClick={() => handleElementSelect('graph3')}>Plant Growth and Development</button>

          {activeElement === 'graph1' && <ChartContainer cardData={EnviornmentFactors}/>}
          {activeElement === 'graph2' && <ChartContainer cardData={SoilHealthNutrientsFactors}/>}
          {activeElement === 'graph3' && <ChartContainer cardData={PlantInfo}/>}


        </div>
      </div>
      
    </div>
  );
};

export default EnviornmentCaptureResults;

