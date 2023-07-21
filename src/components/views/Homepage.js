import React, { useState } from 'react';
import '../../App.css';
import logo from '../../logo.svg';

import Button from '../common/Button';
import Modal  from '../common/Modal';
import VitalCaptureForm from '../forms/VitalCaptureForm'

const Table = ({ heading, body }) => {
  return (
    <div className="table-section">
      <h2 className="table-title">Hourly Forecast of Blueberry Grow Pod</h2>
      <table className="table">
        <thead>
          <tr>
            {heading.map((head, headID) => <th key={headID}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) => (
            <TableRow rowContent={rowContent} key={rowID} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowContent }) => {
  return (
    <tr>
      {Object.values(rowContent).map((val, rowID) => (
        <td key={rowID}>{val}</td>
      ))}
    </tr>
  );
};
const heading = ['CaptureTime', 'Temperature', 'Humidity', 'CO2', 'Lighting', 'pH', 'EC'];
  const mockData = [
    {
      CaptureTime: formatDate(new Date().setHours(7, 0, 0)),
      Temperature: '25°C',
      Humidity: '60%', // Add appropriate value
      CO2: '300ppm', // Add appropriate value
      Lighting: '3500 lux',
      pH: '6.2',
      EC: '1.8 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(8, 0, 0)),
      Temperature: '27°C',
      Humidity: '50%', // Add appropriate value
      CO2: '200ppm', // Add appropriate value
      Lighting: '4000 lux',
      pH: '5.8',
      EC: '1.5 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(9, 0, 0)),
      Temperature: '23°C',
      Humidity: '40%', // Add appropriate value
      CO2: '250ppm', // Add appropriate value
      Lighting: '3000 lux',
      pH: '6.0',
      EC: '2.0 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(10, 0, 0)),
      Temperature: '26°C',
      Humidity: '40%', // Add appropriate value
      CO2: '200ppm', // Add appropriate value
      Lighting: '3000 lux',
      pH: '6.4',
      EC: '2.0 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(11, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '300ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(12, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '500ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(13, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '430ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(14, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '320ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
    {
      CaptureTime: formatDate(new Date().setHours(15, 0, 0)),
      Temperature: '24°C',
      Humidity: '40%', // Add appropriate value
      CO2: '432ppm', // Add appropriate value
      Lighting: '3800 lux',
      pH: '6.2',
      EC: '1.7 mS/cm',
    },
  ];
  function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString('en-US', options);
  }
const date = new Date();
const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

        
const Homepage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
    console.log('Button clicked');
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

    return (
      <div className="App">
      <h1>{showTime}</h1>
      
      <Button label="Capture Plan Enviornment" onClick={handleButtonClick} />

      <Modal isOpen={showModal} onClose={handleModalClose}>
        <VitalCaptureForm />
      </Modal>


      <div className="section">
        <h2 className="section-title">Air Quality Monitor (AQI Sensor)</h2>
        <Table heading={heading} body={mockData} />
      </div>
    </div>);
  };
export default Homepage;


