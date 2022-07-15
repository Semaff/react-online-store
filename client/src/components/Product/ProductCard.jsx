import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../router/routerConsts";
import { appendProduct, toggleFavouriteProduct } from "../../store/basketSlice";
import { selectUserLoggedIn } from "../../store/userSlice";
import { Cart, Eye, Like } from "../_SVG";
import "./Product.scss"

const ProductCard = ({ isMini, id, img, name, rating, price, salePrice, quantity, isFavourite }) => {
    const isLoggedIn = useSelector(selectUserLoggedIn)
    const dispatch = useDispatch();
    const addedNotifyRef = useRef();

    const handleFavouriteClick = () => {
        if (isLoggedIn) dispatch(toggleFavouriteProduct(id));
    }

    const handleAddToCartClick = (productId, quantity) => {
        if (isLoggedIn) {
            addedNotifyRef.current.style.opacity = "1";
            addedNotifyRef.current.style.bottom = "110%";

            dispatch(appendProduct({ productId, quantity }));
            setTimeout(() => {
                addedNotifyRef.current.style.opacity = "0";
                addedNotifyRef.current.style.bottom = "100%";
            }, 2000)
        }
    }

    return (
        <div className={`product  --card ${isMini ? " mini" : ""}`}>
            <Link style={{ flexShrink: 0 }} to={PRODUCT_ROUTE + "/" + id}>
                <img
                    src={(window.location.origin + "/db-images/" + img) || "https://placehold.jp/1000x1000.png"}
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
                        <div className="product__notify" ref={addedNotifyRef}>Product Added to Cart!</div>
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