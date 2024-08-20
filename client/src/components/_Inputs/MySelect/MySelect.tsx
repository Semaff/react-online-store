import "./MySelect.scss";

const MySelect = ({ name, options, labelText, isImportant, value, defaultValue, onChange }) => {
  return (
    <div className="input__placeholder">
      {labelText && (
        <label className={`label ${isImportant ? "--important" : null}`} htmlFor={name}>
          {labelText}
        </label>
      )}

      <select
        className="select"
        value={value || undefined}
        defaultValue={defaultValue || undefined}
        name={name}
        id={name}
        onChange={onChange}
      >
        <option value="default" disabled>
          Choose...
        </option>

        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default MySelect;
