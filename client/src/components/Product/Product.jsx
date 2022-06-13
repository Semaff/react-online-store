import { Cart, Eye, Like, Refresh } from "../_SVG";
import "./Product.scss";

const Product = ({ price, oldPrice, name, rating }) => {
    return (
        <div className="product">
            <div className="product__content">
                <div className="product__header">
                    <h3 className="product__name">{name}</h3>

                    <div className="product__price">
                        ${price}
                        <h4 className="product__price-old">${oldPrice}</h4>
                    </div>
                </div>

                <div className="product__actions">
                    <button className="btn  --black  --small --poppins" type="button"><Cart /> Add To Cart</button>

                    <div className="product__btns">
                        <button className="btn  --rounded  --grey" type="button"><Refresh /></button>
                        <button className="btn  --rounded  --grey" type="button"><Like /></button>
                        <button className="btn  --rounded  --grey" type="button"><Eye /></button>
                    </div>
                </div>

                <div className="product__rating">
                    Rating: {rating}
                </div>
            </div>
        </div>
    )
}

export default Product;