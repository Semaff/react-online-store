import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Pagination, Product, Spinner, ViewControl } from "../../components";
import ProductCard from "../../components/Product/ProductCard";
import ProductList from "../../components/Product/ProductList";
import { selectCategory } from "../../store/categoriesSlice";
import { selectProductsStatus } from "../../store/productsSlice";
import "./Products.scss";

const Grid = ({ products }) => {
    return (
        <div className="products__grid">
            {products?.length > 0 && products.map((product, index) => (
                <ProductCard isMini key={index} {...product} />
            ))}
        </div>
    )
}

const Short = ({ products }) => {
    return (
        <div className="products__short">
            {products?.length > 0 && products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
    )
}

const List = ({ products }) => {
    return (
        <div className="products__list">
            {products?.length > 0 && products.map((product, index) => (
                <ProductList key={index} {...product} />
            ))}
        </div>
    )
}

const Products = ({ products }) => {
    /*
      Functions
    */
    // You can't select multiple Price, brandId and categoryId, so it's just Search Query 
    function changeSearchQuery(name, value) {
        searchParams.set(name, value);
        setSearchParams(searchParams);
    }

    function handleSelectClick(name, value) {
        if (name === "order" && value === "Ascending") {
            changeSearchQuery(name, 1);
        } else if (name === "order" && value === "Descending") {
            changeSearchQuery(name, 2);
        } else {
            changeSearchQuery(name, value);
        }
        changeSearchQuery("page", 1)
    }

    function handlePageChange(totalPages, pageIndex) {
        if (pageIndex <= 0) {
            changeSearchQuery("page", 1)
        } else if (pageIndex >= totalPages) {
            changeSearchQuery("page", totalPages)
        } else {
            changeSearchQuery("page", pageIndex)
        }
    }

    /*
      Variables
    */
    const [view, setView] = useState("grid");
    const [searchParams, setSearchParams] = useSearchParams();
    const productsStatus = useSelector(selectProductsStatus);
    const category = useSelector(selectCategory);

    return (
        <div className="products">
            <div className="products__banner">
                <div className="products__banner-content">
                    <i>Fashion Shop</i>
                    <span>Ocassions</span>
                </div>
            </div>

            <div className="products__desc">
                <h4>
                    {Object.keys(category).length > 0
                        ? category.name
                        : "Shop"
                    }
                </h4>
                <p>
                    {Object.keys(category).length > 0
                        ?
                        category.description
                        :
                        `Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore consequuntur
                        magni dolores veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed`
                    }

                </p>
            </div>

            <ViewControl
                setView={setView}
                onSelectClick={handleSelectClick}
            />

            <div className="products__content">
                {productsStatus === "pending" && (
                    <div className="loading">
                        <Spinner />
                    </div>
                )}

                {view === "grid" && <Grid products={products.rows} />}
                {view === "list" && <List products={products.rows} />}
                {view === "short" && <Short products={products.rows} />}
            </div>

            <Pagination
                totalProducts={products.count}
                searchParams={searchParams}
                handlePageChange={handlePageChange}
            />
        </div>
    )
}

export default Products;