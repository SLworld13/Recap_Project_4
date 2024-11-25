export default function ColorInput({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100px" }}
      />
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "40px", marginLeft: "10px" }}
      />
    </div>
  );
}
