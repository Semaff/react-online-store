import { MyInput, MySelect } from "../../../components";
import { Cart } from "../../../components/_SVG";
import "./ProductDescription.scss";

const ProductDescription = () => {
    const sizes = ["XS", "L", "XL", "S"]

    return (
        <div className="product__desc  --desc">
            <h3 className="product__name  --desc">Aliquam quaerat voluptatem</h3>

            <div className="product__text  --desc">
                <p>
                    Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam Perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim. veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim.
                </p>
            </div>

            <div className="product__rating">Rating 4.2</div>

            <div className="product__price">
                $22.51
                <span className="product__price-old">$25.51</span>
            </div>

            <div className="product__size">
                <span>Size: </span> 
                <MySelect options={sizes} />
            </div>

            <div className="product__colors">
                Color:
                <div className="color" style={{backgroundColor: "#ff9d27"}}></div>
                <div className="color" style={{backgroundColor: "#403a34"}}></div>
                <div className="color" style={{backgroundColor: "#416d99"}}></div>
            </div>

            <div className="product__quantity">
                Quantity: 
                <MyInput type="number" name="quantity" defaultValue={1} min="1" max="100" />
                <button className="btn  --black --poppins  --fs0"><Cart /> Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductDescription;