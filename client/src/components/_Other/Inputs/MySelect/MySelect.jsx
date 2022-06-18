import "./MySelect.scss";

const MySelect = ({ name, options, labelText, isImportant }) => {
    return (
        <div className="input__placeholder">
            {labelText && (
                <label className={`label ${isImportant ? "--important" : null}`} htmlFor={name}>
                    {labelText}
                </label>
            )}
            <select className="select" name="name" id="name">
                <option value="" disabled selected>Choose...</option>

                {options && options.length > 0 && options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default MySelect;