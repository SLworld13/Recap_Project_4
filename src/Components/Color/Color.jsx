import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({ color, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false); // Zustand für Bearbeitungsmodus
  const [showConfirmation, setShowConfirmation] = useState(false); // Zustand für Löschbestätigung

  // Wenn der Benutzer auf "Edit" klickt
  const handleEditClick = () => {
    setIsEditing(true); // Setze isEditing auf true, um das Formular anzuzeigen
  };

  // Wenn der Benutzer das Bearbeiten abbricht
  const handleCancelEdit = () => {
    setIsEditing(false); // Setze isEditing auf false, um das Formular zu schließen
  };

  // Wenn der Benutzer das bearbeitete Formular absendet
  const handleUpdateColor = (updatedColor) => {
    onEdit(updatedColor); // Gebe die aktualisierte Farbe an die App weiter
    setIsEditing(false); // Beende den Bearbeitungsmodus
  };

  // Wenn der Benutzer auf den Delete-Button klickt
  const handleDeleteClick = () => {
    setShowConfirmation(true); // Zeige Bestätigung für das Löschen an
  };

  // Wenn der Benutzer das Löschen abbricht
  const handleCancelDelete = () => {
    setShowConfirmation(false); // Bestätigung schließen, ohne zu löschen
  };

  // Wenn der Benutzer das Löschen bestätigt
  const handleDelete = () => {
    onDelete(color.id); // Lösche die Farbe anhand der ID
    setShowConfirmation(false); // Bestätigung schließen, nachdem gelöscht wurde
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

      {/* Wenn nicht im Bearbeitungsmodus */}
      {!isEditing ? (
        <>
          {/* Zeige den Edit-Button */}
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>

          {/* Zeige den Delete-Button */}
          <button className="delete-button" onClick={handleDeleteClick}>
            Delete
          </button>
        </>
      ) : (
        // Wenn im Bearbeitungsmodus, zeige das ColorForm
        <ColorForm
          defaultValues={color} // Übergib die aktuellen Farbwerte zum Bearbeiten
          addColor={handleUpdateColor} // Funktion zum Aktualisieren der Farbe
          onCancel={handleCancelEdit} // Funktion zum Abbrechen des Bearbeitens
        />
      )}

      {/* Bestätigungsdialog für das Löschen */}
      {showConfirmation && (
        <div className="confirmation">
          <p className="color-card-highlight">
            Are you sure you want to delete this color?
          </p>
          <button className="delete-button" onClick={handleDelete}>
            Yes, Delete
          </button>
          <button className="delete-button cancel" onClick={handleCancelDelete}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
