import { useState } from "react";
import { initialColors } from "./lib/colors"; // Deine Initialfarben
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState(initialColors); // Farben werden im Zustand verwaltet

  // Funktion, um eine neue Farbe hinzuzufügen
  const addColor = (newColor) => {
    setColors([newColor, ...colors]); // Die neue Farbe wird zum Anfang der Liste hinzugefügt
  };

  // Funktion, um eine bestehende Farbe zu bearbeiten
  const editColor = (updatedColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  };

  // Funktion, um eine Farbe zu löschen
  const deleteColor = (colorId) => {
    setColors(colors.filter((color) => color.id !== colorId));
  };

  return (
    <div className="App">
      <h1>Theme Creator</h1>

      {/* Formular zum Hinzufügen einer neuen Farbe */}
      <ColorForm addColor={addColor} />

      {/* Wenn keine Farben vorhanden sind */}
      {colors.length === 0 ? (
        <p className="no-colors">No colors left. Please add some new colors!</p>
      ) : (
        <div className="colors-grid">
          {/* Jede Farbe wird als eigene Color-Komponente angezeigt */}
          {colors.map((color) => (
            <Color
              key={color.id}
              color={color}
              onDelete={deleteColor}
              onEdit={editColor} // Funktion zum Bearbeiten wird übergeben
            />
          ))}
        </div>
      )}
    </div>
  );
}
