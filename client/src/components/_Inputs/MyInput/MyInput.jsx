import "./MyInput.scss";

const MyInput = (props) => {
    const {
        type,
        name,
        placeholder,
        labelText,
        defaultValue,
        isImportant,
        isCardName,
        min,
        max,
        value,
        inputRef,
        onChange
    } = props;

    return (
        <div className={`input__placeholder ${isCardName ? "--cardname" : ""}`}>
            {labelText && (
                <label className={`label ${isImportant ? "--important" : ""}`} htmlFor={name}>
                    {labelText}
                </label>
            )}
            <input
                ref={inputRef}
                value={value}
                onChange={onChange}
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