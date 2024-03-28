export default function ColorPicker() {
  return (
    <div className="flex gap-3 items-center">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-1">Red</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-1">Blue</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
    </div>
  );
}
