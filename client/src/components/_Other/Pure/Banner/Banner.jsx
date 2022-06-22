import "./Banner.scss";

const Banner = ({ title, subTitle, text, btnText, priceText, isMini }) => {
    return (
        <div className={`banner  ${isMini ? "--mini" : ""}`}>
            {title && (<h4 className="banner__title">{title}</h4>)}

            {subTitle && (<h5 className="banner__subtitle">{subTitle}</h5>)}

            {priceText && (<h6 className="banner__price">{priceText}</h6>)}

            {text && (
                <div className="banner__text">
                    <p>{text}</p>
                </div>
            )}

            {btnText && (
                <button className="btn --black --poppins --small" type="btn">
                    {btnText}
                </button>
            )}
        </div>
    )
}

export default Banner;