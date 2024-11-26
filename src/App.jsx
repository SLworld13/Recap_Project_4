import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]); // Fügt die neue Farbe an den Anfang der Liste
  };

  const deleteColor = (colorId) => {
    setColors(colors.filter((color) => color.id !== colorId)); // Löscht die Farbe mit der angegebenen ID
  };

  return (
    <div className="App">
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />

      {/* Nachricht wenn keine Farben mehr da sind */}
      {colors.length === 0 ? (
        <p className="no-colors">No colors left. Please add some new colors!</p>
      ) : (
        <div className="colors-grid">
          {colors.map((color) => (
            <Color key={color.id} color={color} onDelete={deleteColor} />
          ))}
        </div>
      )}
    </div>
  );
}
