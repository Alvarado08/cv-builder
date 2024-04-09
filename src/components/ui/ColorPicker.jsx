export default function ColorPicker({ colorName, colorValue }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text mr-1">{colorName}</span>
        <input type="radio" name="radio-10" className={`radio ${colorValue}`} />
      </label>
    </div>
  );
}
