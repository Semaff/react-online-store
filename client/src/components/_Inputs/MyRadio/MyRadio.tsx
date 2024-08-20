import "./MyRadio.scss";

const MyRadio = ({ name, value, labelText, labelColor }) => {
  return (
    <div className="radio__flexbox">
      <input type="radio" className="radio" value={value} id={value} name={name} />
      <label className={`label ${labelColor === "black" ? "--black" : null}`} htmlFor={value}>
        {labelText}
      </label>
    </div>
  );
};

export default MyRadio;
