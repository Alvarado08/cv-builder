export default function Input({ label, type = "text", value, onChange }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={label}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="label"></div>
    </label>
  );
}
