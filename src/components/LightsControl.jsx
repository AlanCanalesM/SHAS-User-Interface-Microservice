// LightsControl.js

import React, { useState } from 'react';
import './styles/LightsControl.css'; // Import your CSS file for styling

const LightsControl = () => {
  const [lightsOn, setLightsOn] = useState(false);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
    // Add logic to send event to microservices or backend
  };

  return (
    <div className="lights-control">
      <h2 className="control-title">Lights Control</h2>
      <button className={`toggle-button ${lightsOn ? 'on' : 'off'}`} onClick={toggleLights}>
        {lightsOn ? 'Turn Off Lights' : 'Turn On Lights'}
      </button>
    </div>
  );
}

export default LightsControl;
