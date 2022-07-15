import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { PRODUCT_ROUTE } from "../../router/routerConsts"
import { appendProduct, toggleFavouriteProduct } from "../../store/basketSlice"
import { Cart, Eye, Like } from "../_SVG"
import { MyInput, MySelect } from "../index";
import "./Product.scss"
import { selectUserLoggedIn } from "../../store/userSlice"

const Product = ({
    isMini,
    isFull,
    id,
    img,
    name,
    rating,
    description,
    colors,
    price,
    sizes,
    salePrice,
    quantity,
    isFavourite
}) => {
    const isLoggedIn = useSelector(selectUserLoggedIn)
    const [curColor, setCurColor] = useState(null);
    const [productQuantity, setProductQuantity] = useState(1);
    const addedNotifyRef = useRef();
    const dispatch = useDispatch();

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

    let colorsContent = (
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
    )

    let priceContent = (
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
    )

    return (
        <div className={"product" + (isMini ? "  --mini" : "") + (isFull ? "  --full" : "")}>
            <Link to={PRODUCT_ROUTE + "/" + id} style={{ flexShrink: 0 }}>
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

                    <span className="product__rating">Rating: {rating}</span>

                    {!isMini && (
                        <div className="product__text">
                            <p>{description}</p>
                        </div>
                    )}

                    {!isMini ? colorsContent : priceContent}
                </div>

                {/* If it's Full Page description of Product */}
                {isFull && (
                    <>
                        {priceContent}

                        <div className="product__size">
                            <span>Size: </span>
                            <MySelect options={sizes} />
                        </div>

                        <div className="product__quantity">
                            Quantity:
                            <MyInput
                                type="number"
                                name="quantity"
                                min="1"
                                value={productQuantity}
                                onChange={(e) => setProductQuantity(e.target.value)}
                                max={quantity}
                            />

                            <button
                                className="btn  --black --poppins  --fs0"
                                type="button"
                                disabled={quantity === 0}
                                onClick={() => handleAddToCartClick(id, productQuantity)}
                            >
                                <Cart /> {quantity === 0 ? "Sold" : "Add To Cart"}
                                <div className="product__notify" ref={addedNotifyRef}>Product Added to Cart!</div>
                            </button>

                        </div>
                    </>
                )}

                {/* If it's not Full Page or Product mini */}
                {(!isMini && !isFull) && (
                    <>
                        {priceContent}

                        <div className="product__btns">
                            <button
                                className="btn  --black --small --poppins --disabled"
                                type="button"
                                disabled={quantity === 0}
                                onClick={() => handleAddToCartClick(id, productQuantity)}
                            >
                                <Cart /> Add To Cart
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
                    </>
                )}
            </div>
        </div>
    )
}

export default Product;