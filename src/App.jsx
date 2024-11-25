import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]); // Fügt die neue Farbe an den Anfang der Liste
  };

  return (
    <div className="App">
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      <div className="colors-grid">
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
