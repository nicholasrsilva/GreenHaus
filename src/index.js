import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './components/views/Homepage';
import Dashboard from './components/views/Dashboard/EnviornmentCaptureResults';
import Lessons from './components/views/Lessons';
import PlantSearchEngine from './components/views/PlantSearchEngine'
import Faq from './components/views/Faq'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="navigation-container">
        <Link to='/home'>Manual Capture</Link>
        {/* TODO: Uncomment files when complete. Only in progress or finalized pages are not commented out */}
        {/* <Link to='/lessons'>Lessons</Link>
        <Link to='/plantIdentification'>Plant Identification</Link>
        <Link to='/faq'>FAQL</Link> */}
        <Link to='/dashboard'>Recipes</Link>

      </div>
      <Routes>
        <Route path='/home' element={<Homepage />}  />
        <Route path='/lessons' element={<Lessons/>} />
        <Route path='/plantIdentification' element={<PlantSearchEngine/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
