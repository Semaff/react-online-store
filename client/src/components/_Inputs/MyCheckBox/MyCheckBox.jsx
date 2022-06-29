import "./MyCheckBox.scss";

const MyCheckBox = ({ name, labelText, defaultChecked, onChange }) => {
    return (
        <div className="checkbox__flexbox">
            <input
                type="checkbox"
                className="checkbox"
                defaultChecked={defaultChecked}
                onChange={onChange}
                id={name}
                name={name}
            />

            {labelText && (
                <label htmlFor={name} className="label">{labelText}</label>
            )}
        </div>
    )
}

export default MyCheckBox;