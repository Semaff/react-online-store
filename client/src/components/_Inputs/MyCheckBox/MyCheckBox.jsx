import "./MyCheckBox.scss";

const MyCheckBox = ({ name, labelText }) => {
    return (
        <div className="checkbox__flexbox">
            <input id={name} name={name} type="checkbox" className="checkbox" />
            <label htmlFor={name} className="label">{labelText}</label>
        </div>
    )
}

export default MyCheckBox;