import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/views/Homepage';
import Dashboard from './components/views/Dashboard/EnviornmentCaptureResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="navigation-container">
        <Link to='/home'>Homepage</Link>
        <Link to='/dashboard'>Lessons</Link>
        <Link to='/dashboard'>Plant Identification</Link>
        <Link to='/dashboard'>Activities</Link>
        <Link to='/dashboard'>Videos</Link>
        <Link to='/dashboard'>Tips and Tricks</Link>
        <Link to='/dashboard'>Garden Monitoring Dashboard</Link>

      </div>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
