import "./Tabs.scss";

const Tabs = () => {
    return (
        <div className="tabs">
            <button className="tab" type="button">Featured</button>
            <button className="tab" type="button">Latest</button>
            <button className="tab" type="button">Bestseller</button>
        </div>
    )
}

export default Tabs;