import "./Rating.scss";

const Rating = ({ name, description, rate }) => {
  return (
    <div className="rating">
      <h4 className="rating__name">{name}</h4>

      <div className="rating__desc">
        <p>{description ? description : "..."}</p>
      </div>

      <div className="rating__rate">Rate: {rate}</div>
    </div>
  );
};

export default Rating;
