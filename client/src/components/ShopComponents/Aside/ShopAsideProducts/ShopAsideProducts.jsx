import { Product } from "../../../";
import "./ShopAsideProducts.scss";

const ShopAsideProducts = ({ products }) => {
    return (
        <>
            <div className="shop__aside-title">
                <h4>Sale products</h4>
                <div className="toggle"></div>
            </div>

            <div className="shop__aside-products">
                {products.map(product => (
                    <Product key={product.name} {...product} />
                ))}
            </div>
        </>
    )
}

export default ShopAsideProducts;