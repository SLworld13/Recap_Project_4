import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleDelete = () => {
    onDelete(color.id);
  };
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>Contrast: {color.contrastText}</p>

      {!showConfirmation ? (
        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      ) : (
        <div className="confirmation">
          <p className="color-card-highlight">Really delete this color?</p>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="delete-button cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
