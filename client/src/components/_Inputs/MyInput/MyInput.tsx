import "./MyInput.scss";

const MyInput = ({
  type,
  name,
  placeholder,
  labelText,
  defaultValue,
  isImportant,
  isCardName,
  min,
  max,
  value,
  inputRef,
  onChange,
}) => {
  return (
    <div className={`input__placeholder ${isCardName ? "--cardname" : ""}`}>
      {labelText && (
        <label className={`label ${isImportant ? "--important" : ""}`} htmlFor={name}>
          {labelText}
        </label>
      )}
      <input
        className="input"
        ref={inputRef}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        min={min}
        max={max}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MyInput;
