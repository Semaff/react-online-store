import { useState } from "react";
import Product from "../../../_Other/Pure/Product/Product";
import ProductCard from "../../../_Other/Pure/ProductCard/ProductCard";
import ProductList from "../../../_Other/Pure/ProductList/ProductList";
import ShopMainControl from "../ShopMainControl/ShopMainControl";
import ShopMainPagination from "../ShopMainPagination/ShopMainPagination";
import "./ShopMainProducts.scss";

const Grid = ({ products }) => {
    return (
        <div className="shop__main-grid">
            {products?.length > 0 && products.map(product => (
                product
            ))}
        </div>
    )
}

const Short = ({ products }) => {
    return (
        <div className="shop__main-short">
            {products.map(product => (
                <Product {...product} />
            ))}
        </div>
    )
}

const List = ({ products }) => {
    return (
        <div className="shop__main-list">
            {products.map(product => (
                <ProductList {...product} />
            ))}
        </div>
    )
}

const ShopMainProducts = ({ products }) => {
    const [view, setView] = useState("grid");

    return (
        <>
            <ShopMainControl setView={setView} />

            {view === "grid" && <Grid products={products} />}
            {view === "list" && <List products={products} />}
            {view === "short" && <Short products={products} />}

            <ShopMainPagination />
        </>
    )
}

export default ShopMainProducts;