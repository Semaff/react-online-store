import { Cart, Eye, Like, Refresh } from "../../../_SVG";
import "./Product.scss"

const Product = () => {
    return (
        <div className="product">
            <div className="product__content">
                <img src="https://placehold.jp/1000x1000.png" alt="1" className="product__img" />

                <div className="product__desc">
                    <h4 className="product__name">Aliquam quaerat voluptatem</h4>
                    <span className="product__rating">Rating: 4.2</span>

                    <div className="product__text">
                        <p>
                            Perspiciatis unde omnis iste natus error sit
                            omnis iste natus error sit voluptat
                        </p>
                    </div>

                    <div className="product__colors">
                        <div className="color" style={{ background: "#ff9d27", border: "1px solid #e5e5e5" }}></div>
                        <div className="color" style={{ background: "#403a34", border: "1px solid #e5e5e5" }}></div>
                        <div className="color" style={{ background: "#416d99", border: "1px solid #e5e5e5" }}></div>
                    </div>
                </div>
            </div>

            <div className="product__price">
                $105.25 <span className="product__price-old">$155.25</span>
            </div>

            <div className="product__btns">
                <button className="btn  --black --small --poppins" disabled type="button">
                    <Cart /> Add To Cart
                </button>

                <button className="btn  --rounded  --grey" type="button"><Refresh /></button>
                <button className="btn  --rounded  --grey" type="button"><Like /></button>
                <button className="btn  --rounded  --grey" type="button"><Eye /></button>
            </div>
        </div>
    )
}

export default Product;