import { Link } from "react-router-dom"
import { PRODUCT_ROUTE } from "../../router/routerConsts"
import MyInput from "../_Inputs/MyInput/MyInput"
import MySelect from "../_Inputs/MySelect/MySelect"
import { Cart, Eye, Like, Refresh } from "../_SVG"
import "./Product.scss"

const Product = ({ isList, isCard, isMini, isMiniCard, isFull }) => {
    let colors = (
        <div className="product__colors">
            <div className="color" style={{ background: "#ff9d27", border: "1px solid #e5e5e5" }}></div>
            <div className="color" style={{ background: "#403a34", border: "1px solid #e5e5e5" }}></div>
            <div className="color" style={{ background: "#416d99", border: "1px solid #e5e5e5" }}></div>
        </div>
    )

    let price = (
        <div className="product__price">
            $105.25 <span className="product__price-old">$155.25</span>
        </div>
    )

    const sizes = ["XS", "L", "XL", "S"]

    return (
        <div className={"product" +
            (isList ? "  --list" : "") +
            (isCard ? "  --card" : "") +
            (isMini ? "  --mini" : "") +
            (isFull ? "  --full" : "") +
            (isMiniCard ? "  --card mini" : "")
        }>
            <Link to={PRODUCT_ROUTE}>
                <img src="https://placehold.jp/1000x1000.png" alt="1" className="product__img" />
            </Link>

            <div className="product__content">
                <div className="product__desc">
                    <Link to={PRODUCT_ROUTE} className="product__name">
                        Aliquam quaerat voluptatem
                    </Link>

                    {/* If it's not Card Product and not Card Product mini */}
                    {(!isCard && !isMiniCard)
                        ?
                        <>
                            <span className="product__rating">Rating: 4.2</span>

                            {!isMini && (
                                <div className="product__text">
                                    <p>
                                        Perspiciatis unde omnis iste natus error sit
                                        omnis iste natus error sit voluptat
                                    </p>
                                </div>
                            )}

                            {(!isList && !isMini) ? colors : price}
                        </>
                        : price
                    }
                </div>

                {/* If it's Full Page description of Product */}
                {isFull && (
                    <>
                        {price}

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
                        {!isCard && !isMiniCard && (isList ? colors : price)}

                        <div className="product__btns">
                            <button
                                className="btn  --black --small --poppins --disabled"
                                type="button"
                                disabled
                                style={{ width: isCard ? "max-content" : "" }}
                            >
                                <Cart /> Add To Cart
                            </button>

                            <button className="btn  --rounded  --grey" type="button"><Refresh /></button>
                            <button className="btn  --rounded  --grey" type="button"><Like /></button>
                            <button className="btn  --rounded  --grey" type="button"><Eye /></button>
                        </div>

                        {isCard && <span className="product__rating">Rating: 4.2</span>}
                    </>
                )}
            </div>
        </div>
    )
}

export default Product;