import React, { useState } from 'react';
import '../../App.css';
import logo from '../../logo.svg';

import Button from '../common/Button';
import Modal  from '../common/Modal';
import VitalCaptureForm from '../forms/VitalCaptureForm'


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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{showTime}</p>
        <Button label="Capture Vitals" onClick={handleButtonClick} />
      </header>
      <Modal isOpen={showModal} onClose={handleModalClose}>
        <VitalCaptureForm />
      </Modal>
    </div>);
  };
export default Homepage;


