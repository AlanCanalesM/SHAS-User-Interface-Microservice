import './styles/ColorPalette.css'

const ColorPalette = ({ selectedColor, onColorChange }) => {
    const colors = ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  
    return (
      <div className="color-palette">
        {colors.map(color => (
          <div
            key={color}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
          >
            
          </div>
        ))}
      </div>
    );
  };

export default ColorPalette;