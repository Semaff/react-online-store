import { Link } from "react-router-dom"
import { PRODUCT_ROUTE } from "../../router/routerConsts"
import MyInput from "../_Inputs/MyInput/MyInput"
import MySelect from "../_Inputs/MySelect/MySelect"
import { Cart, Eye, Like, Refresh } from "../_SVG"
import "./Product.scss"

const Product = ({ isMini, isFull, img, name, rating, description, colors, price, sizes, salePrice, quantity }) => {
    let colorsContent = (
        <div className="product__colors">
            {colors && colors.length > 0 && colors.map(color => (
                <div key={color} className="color" style={{ background: color, border: "1px solid #e5e5e5" }} />
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
        <div className={"product" +
            (isMini ? "  --mini" : "") +
            (isFull ? "  --full" : "")
        }>
            <Link to={PRODUCT_ROUTE} style={{ flexShrink: 0 }}>
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
                            <MyInput type="number" name="quantity" defaultValue={1} min="1" max="100" />
                            <button className="btn  --black --poppins  --fs0"><Cart /> Add To Cart</button>
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
                            >
                                <Cart /> Add To Cart
                            </button>

                            <button className="btn  --rounded  --grey" type="button"><Refresh /></button>
                            <button className="btn  --rounded  --grey" type="button"><Like /></button>
                            <button className="btn  --rounded  --grey" type="button"><Eye /></button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Product;