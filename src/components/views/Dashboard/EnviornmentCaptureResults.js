import React, { useEffect, useRef, useState } from 'react';
import './EnviornmentCaptureResults.css';
import ChartContainer from '../../common/ChartContainer';
import {
  EnviornmentFactors,
  SoilHealthNutrientsFactors,
  PlantInfo,
} from '../../data/enviornmentData'
 // Import the arrays from the data.js file

// Sample vegetable and fruit lists
const vegetables = ["Carrot", "Broccoli", "Spinach"];
const fruits = ["Apple", "Banana", "Orange"];

const EnviornmentCaptureResults = () => {
  const [activeElement, setActiveElement] = useState('graph1'); // Initial active element
  const [selectedItem, setSelectedItem] = useState("Carrot");

  // Function to handle element selection
  const handleElementSelect = (element) => {
    setActiveElement(element);
  };
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };




  //Temp, humidity, co2, light, pH, Electrical Conductivity, oxygen
  return (
    <div className="container">
      <div className="section">
      <div className="filtered-items-section">
        <h3>Filtered Vegetables:</h3>
        <ul>
          {vegetables.map((vegetable) => (
            <li
              key={vegetable}
              className={selectedItem === vegetable ? "selected" : ""}
              onClick={() => handleItemSelect(vegetable)}
            >
              {vegetable}
            </li>
          ))}
        </ul>
      </div>

      <div className="filtered-items-section">
        <h3>Filtered Fruits:</h3>
        <ul>
          {fruits.map((fruit) => (
            <li
              key={fruit}
              className={selectedItem === fruit ? "selected" : ""}
              onClick={() => handleItemSelect(fruit)}
            >
              {fruit}
            </li>
          ))}
        </ul>
      </div>
      {/* Render the charts based on the selected item */}
      {selectedItem && (
        <div className="graph-section">
          <div className="section-title">
            Charts for monitoring various aspects of plant growth: {selectedItem}
          </div>
          <h5>
            For reference: Anyone interested in growing their own plants can
            use this page to ensure optimal yield
          </h5>
          <button onClick={() => handleElementSelect("graph1")}>
            Environmental Factors
          </button>
          <button onClick={() => handleElementSelect("graph2")}>
            Soil Health and Nutrients
          </button>
          <button onClick={() => handleElementSelect("graph3")}>
            Plant Growth and Development
          </button>

          {activeElement === "graph1" && (
            <ChartContainer cardData={EnviornmentFactors} />
          )}
          {activeElement === "graph2" && (
            <ChartContainer cardData={SoilHealthNutrientsFactors} />
          )}
          {activeElement === "graph3" && <ChartContainer cardData={PlantInfo} />}
        </div>
      )}

      
      </div>
    </div>
  );
};

export default EnviornmentCaptureResults;

