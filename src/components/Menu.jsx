import './styles/Options.css'
import Button from './CardOption';
import lights from '../assets/lights.png'
import thermostat from '../assets/thermostat.png'
import camera from '../assets/camera.png'
import television from '../assets/television.png'

function Options(){

    return(
        <div className="Options">
            
            <Button name="Lights" image={lights}/>
            <Button name="Thermostat" image={thermostat}/>
            <Button name="Security" image={camera}/>
            <Button name="TVs" image={television}/>
            
        </div>
    )
}

export default Options;