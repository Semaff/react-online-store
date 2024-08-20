import "./MyRange.scss";

const MyRange = ({ name, from, to, value, onChange }) => {
  return (
    <>
      <span className="range__label">
        ${value} - ${to}
      </span>
      <input
        type="range"
        className="range"
        name={name}
        id={name}
        min={from}
        max={to}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default MyRange;
