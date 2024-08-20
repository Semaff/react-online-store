import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../router/routerConsts";
import "./Banner.scss";

const Banner = ({ title, subTitle, text, btnText, priceText, isMini, toCategory, toGender }) => {
  return (
    <div className={`banner  ${isMini ? "--mini" : ""}`}>
      {title && <h4 className="banner__title">{title}</h4>}

      {subTitle && <h5 className="banner__subtitle">{subTitle}</h5>}

      {priceText && <h6 className="banner__price">{priceText}</h6>}

      {text && (
        <div className="banner__text">
          <p>{text}</p>
        </div>
      )}

      {btnText && (
        <Link
          to={
            SHOP_ROUTE +
            ((toCategory && `?categoryId=${toCategory}`) || (toGender && `?gender=${toGender}`))
          }
          className="btn --black --poppins --small"
          type="btn"
        >
          {btnText}
        </Link>
      )}
    </div>
  );
};

export default Banner;
