import "./MyInput.scss";

const MyInput = ({
    name,
    type,
    placeholder,
    labelText,
    defaultValue,
    isImportant,
    isCardName,
    min,
    max,
    value,
    changeValue
}) => {
    return (
        <div className={`input__placeholder ${isCardName ? "--cardname" : ""}`}>
            {labelText && (
                <label className={`label ${isImportant ? "--important" : ""}`} htmlFor={name}>
                    {labelText}
                </label>
            )}
            <input
                value={value}
                onChange={e => changeValue(e.target.value)}
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