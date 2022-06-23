import "./MyRange.scss";

const MyRange = ({ from, to }) => {
    return (
        <>
            <span className="range__label">${from} - ${to}</span>
            <input type="range" className="range" min={from} max={to} />
        </>
    )
}

export default MyRange;