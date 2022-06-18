import { Cart, Eye, Like, Refresh } from "../../../_SVG";
import "./ProductCard.scss";

const ProductCard = ({ price, oldPrice, name, rating, img, mini }) => {
    return (
        <div className={`product-card ${mini ? "mini" : ""}`}>
            <img src={img} alt="product" className="product-card__img" />

            <div className="product-card__content">
                <div className="product-card__header">
                    <h3 className="product-card__name">{name}</h3>

                    <div className="product-card__price">
                        ${price}
                        {oldPrice && (
                            <h4 className="product-card__price-old">${oldPrice}</h4>
                        )}
                    </div>
                </div>

                <div className="product-card__actions">
                    <button className="btn  --black  --small --poppins" type="button"><Cart /> Add To Cart</button>

                    <div className="product-card__btns">
                        <button className="btn  --rounded  --grey" type="button"><Refresh /></button>
                        <button className="btn  --rounded  --grey" type="button"><Like /></button>
                        <button className="btn  --rounded  --grey" type="button"><Eye /></button>
                    </div>
                </div>

                <div className="product-card__rating">
                    Rating: {rating}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;