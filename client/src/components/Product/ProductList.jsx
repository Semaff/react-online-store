import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../router/routerConsts";
import { appendProduct, toggleFavouriteProduct } from "../../store/basketSlice";
import { Cart, Eye, Like } from "../_SVG";
import "./Product.scss";

const ProductList = ({ id, img, name, rating, description, colors, price, salePrice, quantity, isFavourite, onClick }) => {
    const [curColor, setCurColor] = useState(null);
    const addedNotifyRef = useRef();
    const dispatch = useDispatch();

    const handleFavouriteClick = () => {
        dispatch(toggleFavouriteProduct(id));
    }

    const handleAddToCartClick = (productId, quantity) => {
        addedNotifyRef.current.style.opacity = "1";
        addedNotifyRef.current.style.bottom = "110%";

        dispatch(appendProduct({ productId, quantity }));
        setTimeout(() => {
            addedNotifyRef.current.style.opacity = "0";
            addedNotifyRef.current.style.bottom = "100%";
        }, 2000)
    }

    return (
        <div className="product --list">
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

                    <span className="product__rating">
                        Rating: {rating}
                    </span>

                    <div className="product__text">
                        <p>{description}</p>
                    </div>

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

                <div className="product__colors">
                    {colors && colors.length > 0 && colors.map(color => (
                        <div
                            className={`color ${curColor === color ? "active" : ""}`}
                            onClick={() => setCurColor(color)}
                            key={color}
                            style={{ background: color, border: "1px solid #e5e5e5" }}
                        />
                    ))}
                </div>

                <div className="product__btns">
                    <button
                        className="btn  --black --small --poppins"
                        type="button"
                        disabled={quantity === 0}
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
            </div>
        </div>
    )
}

export default ProductList;