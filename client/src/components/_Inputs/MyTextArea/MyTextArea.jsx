import "./MyTextArea.scss";

const MyTextArea = ({ name, placeholder, labelText, value, onChange }) => {
    return (
        <div className="input__placeholder">
            {labelText && (
                <label className='label' htmlFor={name}>{labelText}</label>
            )}
            <textarea
                className='textarea'
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default MyTextArea;