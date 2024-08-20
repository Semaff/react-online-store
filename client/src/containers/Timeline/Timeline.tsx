import "./Timeline.scss";

const Timeline = ({ page }) => {
  return (
    <section
      className="section  --fullPadding"
      style={{
        background: "url('./images/timeline.jpg') center no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="timeline__text">Home / {page}</div>
      </div>
    </section>
  );
};

export default Timeline;
