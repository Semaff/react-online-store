import "./MyInput.scss";

const MyInput = ({ name, type, placeholder, labelText, defaultValue, isImportant, isCardName, min, max }) => {
    return (
        <div className={`input__placeholder ${isCardName ? "--cardname" : ""}`}>
            {labelText && (
                <label className={`label ${isImportant ? "--important" : ""}`} htmlFor={name}>
                    {labelText}
                </label>
            )}
            <input
                className="input"
                defaultValue={defaultValue}
                min={min}
                max={max}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default MyInput;