import { useState } from "react";
import { Product, ProductCard, ProductList, ShopMainControl, ShopMainPagination  } from "../../index";
import "./ShopMainProducts.scss";

const Grid = ({ products }) => {
    return (
        <div className="shop__main-grid">
            {products?.length > 0 && products.map((product, index) => (
                <ProductCard mini key={index} {...product} />
            ))}
        </div>
    )
}

const Short = ({ products }) => {
    return (
        <div className="shop__main-short">
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
    )
}

const List = ({ products }) => {
    return (
        <div className="shop__main-list">
            {products.map((product, index) => (
                <ProductList key={index} {...product} />
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