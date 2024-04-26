export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  isDisabled,
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="label"></div>
    </label>
  );
}
