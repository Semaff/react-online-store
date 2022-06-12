import "./Banner.scss";

const Banner = ({ title, subTitle, text, btnText, addMarginTop, addMarginBottom }) => {
    console.log(addMarginTop)

    return (
        <div className="banner" style={(addMarginTop && { marginTop: '-90px' }) || (addMarginBottom && {marginBottom: '-90px'})}>
            <h4 className="banner__title">{title}</h4>
            <h5 className="banner__subtitle">{subTitle}</h5>

            <div className="banner__text">
                <p>{text}</p>
            </div>

            <button className="btn --black --poppins --small" type="btn">{btnText}</button>
        </div>
    )
}

export default Banner;