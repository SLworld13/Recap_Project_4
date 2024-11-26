import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function ColorForm({ addColor, defaultValues, onCancel }) {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("#ff0000");
  const [contrastText, setContrastText] = useState("#ffffff");

  // Wenn Farben zum Bearbeiten übergeben werden, setzt die felder auf die aktuellen Werte
  useEffect(() => {
    if (defaultValues) {
      setRole(defaultValues.role);
      setHex(defaultValues.hex);
      setContrastText(defaultValues.contrastText);
    }
  }, [defaultValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedColor = {
      id: defaultValues?.id || nanoid(), // Falls es sich um ein neues Color handelt, ID generieren
      role,
      hex,
      contrastText,
    };

    addColor(updatedColor); // Übergib die aktualisierte Farbe an die App
    setRole(""); // Zurücksetzen der Eingabewerte
    setHex("#ff0000");
    setContrastText("#ffffff");
  };

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <label>
        Hex:
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
        <input
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
      </label>
      <label>
        Kontrast-Text:
        <input
          type="color"
          value={contrastText}
          onChange={(e) => setContrastText(e.target.value)}
        />
        <input
          type="text"
          value={contrastText}
          onChange={(e) => setContrastText(e.target.value)}
        />
      </label>
      <button className="update-color" type="submit">
        {defaultValues ? "Update color" : "Add color"}
      </button>
      {defaultValues && (
        <button
          className="cancel-update-button"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
}
