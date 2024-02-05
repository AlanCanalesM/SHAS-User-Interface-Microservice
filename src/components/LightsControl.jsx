// LightsControl.js

import React, { useState } from 'react';
import './styles/LightsControl.css'; // Import your CSS file for styling
import ColorPalette from './ColorPalette'

const LightsControl = ({ lights }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [selectedLight, setSelectedLight] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [brightness, setBrightness] = useState(100);
  
  const rooms = Array.from(new Set(lights.map(light => light.roomId))).map(roomId => ({
    id: roomId,
    name: roomId
  }));
  console.log(rooms);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
    // Add logic to send event to microservices or backend
  };

  const handleLightChange = (lightId) => {
    const selected = lights.find(light => light.id === lightId);
    setSelectedLight(selected);
    setBrightness(selected?.brightness || 100);
  };

  const handleColorChange = (color) => {
    // Update the color of the selected light
    const updatedLights = lights.map(light =>
      light.id === selectedLight.id ? { ...light, color } : light
    );
    setLights(updatedLights);
    setSelectedLight({ ...selectedLight, color });
  };

  const handleBrightnessChange = (value) => {
    // Update the brightness of the selected light
    setBrightness(value);
    setLights(prevLights =>
      prevLights.map(light =>
        light.id === selectedLight.id ? { ...light, brightness: value } : light
      )
    );
    setSelectedLight(prevLight => ({ ...prevLight, brightness: value }));
  };

  const handleRoomChange = (roomId) => {
    console.log(roomId);
    setSelectedRoom(roomId);
    setSelectedLight(null); // Reset selected light when changing rooms
  };

  return (
    <div className="lights-control" >
      <h2 className="title">Lights Control</h2>
      <select onChange={(e) => handleRoomChange(e.target.value)}>
        <option value={null}>Select Room</option>
        {rooms.map(room => (
          <option key={room.id} value={room.id}>{room.name}</option>
        ))}
      </select>
      {selectedRoom && (
        <>
          <select onChange={(e) => handleLightChange(Number(e.target.value))}>
            <option value={null}>Select Light</option>
            {lights
              .filter(light => light.roomId === selectedRoom)
              .map(light => (
                <option key={light.id} value={light.id}>{light.name}</option>
              ))}
          </select>
          {selectedLight && (
            <>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={brightness}
                onChange={(e) => handleBrightnessChange(Number(e.target.value))}
              />
              <button className={`toggle-button ${lightsOn ? 'on' : 'off'}`} onClick={toggleLights}>
                {lightsOn ? 'Turn Off Lights' : 'Turn On Lights'}
              </button>
              <div className="selected-light-info">
                <p>Brightness: {brightness}</p>
                <ColorPalette selectedColor={selectedLight.color} onColorChange={handleColorChange} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default LightsControl;
