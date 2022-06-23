import "./MyRadio.scss";

const MyRadio = ({ name, labelText, labelColor }) => {
    return (
        <div className="radio__flexbox">
            <input type="radio" className="radio" id={name} name={name} />
            <label className={`label ${labelColor === "black" ? "--black" : null}`} htmlFor={name}>
                {labelText}
            </label>
        </div>
    )
}

export default MyRadio;