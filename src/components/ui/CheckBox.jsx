export default function CheckBox({ name, checked, onChange, isDisabled }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{name}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={isDisabled}
          className="checkbox"
        />
      </label>
    </div>
  );
}
