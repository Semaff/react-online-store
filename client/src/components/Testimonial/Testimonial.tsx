import "./Testimonial.scss";

const Testimonial = ({ img, name, profession, content }) => {
  return (
    <div className="testimonial">
      <img
        className="testimonial__img"
        src={window.location.origin + "/db-images/" + img || "https://placehold.jp/200x200.png"}
        alt="testimoImg"
      />

      <div className="testimonial__text">
        <p>{content}</p>
      </div>

      <div className="testimonial__desc">
        <h3>{name}</h3>
        <h3>{profession}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
