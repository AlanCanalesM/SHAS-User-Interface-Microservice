import './styles/Panel.css'
import LightsControl from './LightsControl'
import LightsList from './LightsList';
import GridItem from './GridItem';
import RoomOverview from './RoomOverview';
import { useState } from 'react';

function PanelGrid() {

  const [lights, setLights] = useState([
    { id: 1, name: 'Light 1', color: '#ffffff', roomId: "main room", brightness: 100},
    { id: 2, name: 'Light 2', color: '#ff0000', roomId: "living room", brightness: 80},
    { id: 3, name: 'Light 3', color: '#00ff00', roomId: "living room", brightness: 70},
    { id: 4, name: 'Light 4', color: '#0000ff', roomId: "main room", brightness: 40},
    { id: 5, name: 'Light 5', color: '#ffff00', roomId: "living room", brightness: 60},
    { id: 6, name: 'Light 6', color: '#ff00ff', roomId: "main room", brightness: 90},
    { id: 7, name: 'Light 7', color: '#00ffff', roomId: "living room", brightness: 50},
    { id: 8, name: 'Light 8', color: '#000000', roomId: "laundry", brightness: 55},
    { id: 9, name: 'Light 9', color: '#ffffff', roomId: "laundry", brightness: 100},
    // Add more lights as needed
  ]);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px', padding: '20px', margin: '10px' }}>
      <GridItem number={1} />
      <LightsControl lights={lights} />
      <LightsList lights={lights} />
      <RoomOverview lights={lights} />
    </div>
  )
}

export default PanelGrid;