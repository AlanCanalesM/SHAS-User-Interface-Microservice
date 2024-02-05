import React, { useState } from 'react';
import './styles/LightsList.css';

function LightsList({ lights }) {
  const [currentRoom, setCurrentRoom] = useState(0);

  // Group lights by roomId
  const lightsByRoom = lights.reduce((acc, light) => {
    const roomId = light.roomId;
    acc[roomId] = acc[roomId] || [];
    acc[roomId].push(light);
    return acc;
  }, {});

  const roomIds = Object.keys(lightsByRoom);

  const handleRoomChange = (delta) => {
    const newIndex = (currentRoom + delta + roomIds.length) % roomIds.length;
    setCurrentRoom(newIndex);
  };

  return (
    <div className='lights-list'>
      <h2 className='title'>Lights Per Room</h2>
      <div className='room'>
        <button onClick={() => handleRoomChange(-1)}>&lt;</button>
        {currentRoom !== null && (
          <div className='room-content'>
            <h3>{roomIds[currentRoom]}</h3>
            <ul>
              {lightsByRoom[roomIds[currentRoom]].map((light) => (
                <li key={light.id}>
                  {light.name} - {light.brightness}%{' '}
                  <span className='color-circle' style={{ backgroundColor: light.color }}></span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={() => handleRoomChange(1)}>&gt;</button>
      </div>

    </div>
  );
}

export default LightsList;
