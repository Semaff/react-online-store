import "./MyCheckBox.scss";

const MyCheckBox = ({ name, labelText, defaultChecked, checked, onChange }) => {
    return (
        <div className="checkbox__flexbox">
            <input
                type="checkbox"
                className="checkbox"
                defaultChecked={defaultChecked}
                checked={checked}
                onChange={onChange}
                id={name}
                name={name}
            />

            {labelText && (
                <label htmlFor={name} className="label">
                    {labelText}
                </label>
            )}
        </div>
    )
}

export default MyCheckBox;