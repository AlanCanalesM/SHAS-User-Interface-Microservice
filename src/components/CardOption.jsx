import './styles/Button.css';


function Button({name, image}){
    
    return (
        <div className="Card">
        <img src={image} alt="Card Image"/>
        <p>{name}</p>
      </div>
      
    )
}

export default Button;