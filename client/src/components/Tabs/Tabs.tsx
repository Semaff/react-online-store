import "./Tabs.scss";

const Tabs = ({ onClick }) => {
  return (
    <div className="tabs">
      <button className="tab" type="button" onClick={() => onClick(4)}>
        New
      </button>
      <button className="tab" type="button" onClick={() => onClick(3)}>
        Featured
      </button>
    </div>
  );
};

export default Tabs;
