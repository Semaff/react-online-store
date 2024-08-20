import "./MyCheckBox.scss";

const MyCheckBox = ({ name, labelText, checked, onChange }) => {
  return (
    <div className="checkbox__flexbox">
      <input
        type="checkbox"
        className="checkbox"
        checked={!!checked}
        onChange={onChange}
        id={name}
        name={name}
      />

      {labelText && (
        <label htmlFor={name} className="label">
          {labelText}
        </label>
      )}
    </div>
  );
};

export default MyCheckBox;
