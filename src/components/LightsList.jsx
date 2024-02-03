import React, { useState } from 'react';
import './styles/LightsList.css';

function LightsList() {
  const [lights, setLights] = useState([
    { id: 1, name: 'Light 1', color: '#1385C7', roomId: 1, brightness: 100 },
    { id: 2, name: 'Light 2', color: '#ff0000', roomId: 2, brightness: 100 },
    // Add more lights as needed
  ]);

  // Group lights by roomId
  const lightsByRoom = lights.reduce((acc, light) => {
    const roomId = light.roomId;
    acc[roomId] = acc[roomId] || [];
    acc[roomId].push(light);
    return acc;
  }, {});

  return (
    <div className='ligths-list'>
      {Object.keys(lightsByRoom).map((roomId) => (
        <div key={roomId} className='room'>
          <h3>Room {roomId}</h3>
          <ul>
            {lightsByRoom[roomId].map((light) => (
              <li key={light.id}>
                {light.name} - {light.brightness}% <span
                  className='color-circle'
                  style={{ backgroundColor: light.color }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LightsList;
