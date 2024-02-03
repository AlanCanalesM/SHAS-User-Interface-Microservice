import './styles/Panel.css'
import LightsControl from './LightsControl'
import LightsList from './LightsList';
import GridItem from './GridItem';

function PanelGrid(){
    return(
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px', padding: '20px', margin: '10px' }}>
      <GridItem number={1} />
      <LightsControl />
      <LightsList />
      <GridItem number={4} />
    </div>
    )
}

export default PanelGrid;