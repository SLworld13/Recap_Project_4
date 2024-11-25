import { useState } from "react";
import ColorInput from "../ColorInput";
import { nanoid } from "nanoid";

export default function ColorForm({ addColor }) {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("#ff0000");
  const [contrastText, setContrastText] = useState("#ffffff");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };

    addColor(newColor);
    setRole("");
    setHex("#ff0000");
    setContrastText("#ffffff");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <label>
        Hex Color:
        <ColorInput value={hex} onChange={setHex} />
      </label>
      <label>
        Contrast Text:
        <ColorInput value={contrastText} onChange={setContrastText} />
      </label>
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
