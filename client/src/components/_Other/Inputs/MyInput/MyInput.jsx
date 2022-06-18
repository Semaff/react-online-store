import "./MyInput.scss";

const MyInput = ({ name, type, placeholder, labelText, isImportant, isCardName }) => {
    return (
        <div className={`input__placeholder ${isCardName ? "--cardname" : null}`}>
            {labelText && (
                <label className={`label ${isImportant ? "--important" : null}`} htmlFor={name}>
                    {labelText}
                </label>
            )}
            <input
                className="input"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default MyInput;