import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../router/routerConsts";
import { appendProduct, toggleFavouriteProduct } from "../../store/basketSlice";
import { Cart, Eye, Like } from "../_SVG";
import "./Product.scss"

const ProductCard = ({ isMini, id, img, name, rating, price, salePrice, quantity, isFavourite }) => {
    const dispatch = useDispatch();

    const handleFavouriteClick = () => {
        dispatch(toggleFavouriteProduct(id));
    }

    const handleAddToCartClick = (productId, quantity) => {
        dispatch(appendProduct({ productId, quantity }))
    }

    return (
        <div className={`product  --card ${isMini ? " mini" : ""}`}>
            <Link style={{ flexShrink: 0 }} to={PRODUCT_ROUTE + "/" + id}>
                <img
                    src={(process.env.REACT_APP_API_URL + img) || "https://placehold.jp/1000x1000.png"}
                    alt="1"
                    className="product__img"
                />
            </Link>

            <div className="product__content">
                <div className="product__desc">
                    <Link to={PRODUCT_ROUTE + "/" + id} className="product__name">
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
                        style={{ width: "100%" }}
                        onClick={() => handleAddToCartClick(id, 1)}
                    >
                        <Cart /> {quantity === 0 ? "Sold" : "Add To Cart"}
                    </button>

                    <button
                        onClick={() => handleFavouriteClick()}
                        className={`btn  --rounded  --grey ${isFavourite ? "pink" : ""}`}
                        type="button"
                    >
                        <Like />
                    </button>

                    <Link to={PRODUCT_ROUTE + "/" + id} className="btn  --rounded  --grey" type="button">
                        <Eye />
                    </Link>
                </div>

                <span className="product__rating">Rating: {rating}</span>
            </div>
        </div>
    )
}

export default ProductCard;