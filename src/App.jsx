// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LightsControl from './components/LightsControl';
// import ThermostatControl from './components/ThermostatControl';
// import SecurityDashboard from './components/SecurityDashboard';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lights" element={<LightsControl/>}/>
          {/* <Route path="/thermostat" component={ThermostatControl} />
          <Route path="/security" component={SecurityDashboard} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
