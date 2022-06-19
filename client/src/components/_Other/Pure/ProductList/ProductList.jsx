import { Cart, Eye, Like, Refresh } from "../../../_SVG";
import "./ProductList.scss";

const ProductList = ({ isMini }) => {
    return (
        <div className="product-list">
            <img
                src="https://placehold.jp/1000x1000.png"
                alt="1"
                className="product-list__img"
                style={{ width: `${isMini && "10rem"}`, height: `${isMini && "13rem"}` }}
            />

            <div className="product-list__content">
                <h4 className="product-list__name" style={{fontSize: `${isMini && "1.4rem"}`}}>Aliquam quaerat voluptatem</h4>

                <div className="product-list__rating">Rating 4.2</div>

                {!isMini && (
                    <div className="product-list__text">
                        <p>
                            Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            omnis iste natus error sit voluptatem accusantium doloremque laudantium, tot
                        </p>
                    </div>
                )}

                <div className="product-list__price">
                    $105.25
                    <div className="product-list__price-old">$105.25</div>
                </div>

                {!isMini && (
                    <>
                        <div className="product-list__colors">
                            <div className="color" style={{ background: "#ff9d27", border: "1px solid #e5e5e5" }}></div>
                            <div className="color" style={{ background: "#403a34", border: "1px solid #e5e5e5" }}></div>
                            <div className="color" style={{ background: "#416d99", border: "1px solid #e5e5e5" }}></div>
                        </div>

                        <div className="product__btns">
                            <button className="btn  --black --small --poppins" type="button">
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

export default ProductList;