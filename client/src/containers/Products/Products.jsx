import { useState } from "react";
import { Pagination, Product, ViewControl } from "../../components";
import "./Products.scss";

const Grid = ({ products }) => {
    return (
        <div className="products__grid">
            {products?.length > 0 && products.map((product, index) => (
                <Product isMiniCard mini key={index} {...product} />
            ))}
        </div>
    )
}

const Short = ({ products }) => {
    return (
        <div className="products__short">
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
    )
}

const List = ({ products }) => {
    return (
        <div className="products__list">
            {products.map((product, index) => (
                <Product isList key={index} {...product} />
            ))}
        </div>
    )
}

const Products = ({ products }) => {
    const [view, setView] = useState("grid");

    return (
        <div className="products">
            <div className="products__banner">
                <div className="products__banner-content">
                    <i>Fashion Shop</i>
                    <span>Women's Ocassions</span>
                </div>
            </div>

            <div className="products__desc">
                <h4>Women</h4>
                <p>
                    Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore consequuntur
                    magni dolores veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                </p>
            </div>

            <ViewControl setView={setView} />

            {view === "grid" && <Grid products={products} />}
            {view === "list" && <List products={products} />}
            {view === "short" && <Short products={products} />}

            <Pagination />
        </div>
    )
}

export default Products;