import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../router/routerConsts";
import { Cart, Eye, Like, Refresh } from "../_SVG";
import "./Product.scss"

const ProductCard = ({ isMini, img, name, rating, price, salePrice, quantity }) => {
    return (
        <div className={`product  --card ${isMini ? " mini" : ""}`}>
            <Link style={{flexShrink: 0}} to={PRODUCT_ROUTE}>
                <img
                    src={(process.env.REACT_APP_API_URL + img) || "https://placehold.jp/1000x1000.png"}
                    alt="1"
                    className="product__img"
                />
            </Link>

            <div className="product__content">
                <div className="product__desc">
                    <Link to={PRODUCT_ROUTE} className="product__name">
                        {name}
                    </Link>

                    <div className="product__price">
                        {salePrice
                            ?
                            <>
                                <span>${salePrice}</span>
                                <span className="product__price-old">${price}</span>
                            </>
                            : <span>${price}</span>
                        }
                    </div>
                </div>

                <div className="product__btns">
                    <button
                        className="btn  --black --small --poppins"
                        type="button"
                        disabled={quantity === 0}
                        style={{ width: "max-content" }}
                    >
                        <Cart /> Add To Cart
                    </button>

                    <button className="btn  --rounded  --grey" type="button"><Refresh /></button>
                    <button className="btn  --rounded  --grey" type="button"><Like /></button>
                    <button className="btn  --rounded  --grey" type="button"><Eye /></button>
                </div>

                <span className="product__rating">Rating: {rating}</span>
            </div>
        </div>
    )
}

export default ProductCard;