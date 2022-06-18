import "./MyRange.scss";

const MyRange = ({ from, to }) => {
    return (
        <>
            <span className="shop__aside-range">${from} - ${to}</span>
            <input type="range" className="range" min={from} max={to} />
        </>
    )
}

export default MyRange;