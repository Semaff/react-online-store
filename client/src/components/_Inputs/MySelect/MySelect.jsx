import "./MySelect.scss";

const MySelect = ({ name, options, labelText, isImportant, defaultValue, value, onChange }) => {
    return (
        <div className="input__placeholder">
            {labelText && (
                <label className={`label ${isImportant ? "--important" : null}`} htmlFor={name}>
                    {labelText}
                </label>
            )}

            <select
                className="select"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            >
                <option value="" disabled>{defaultValue || "Choose..."}</option>

                {options && options.length > 0 && options.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default MySelect;