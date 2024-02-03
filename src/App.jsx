// App.js

import React from 'react';
import Header from './components/Header';
import Options from './components/Menu';
import PanelGrid from './components/PanelGrid';
import './App.css';


function App() {
  return (
  <div className='Main'>
  <Header />
  <PanelGrid />
  </div>
    // // <Router>
      
    //     
    //     {/* <Routes>
    //       <Route path="/" element={<Home/>}/>
    //       <Route path="/lights" element={<LightsControl/>}/>
    //       {/* <Route path="/thermostat" component={ThermostatControl} />
    //       <Route path="/security" component={SecurityDashboard} /> */}
    //     {/* </Routes> */} 
      
    // // </Router>
  );
}

export default App;
