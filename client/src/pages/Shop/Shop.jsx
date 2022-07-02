import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Aside, Products, Timeline } from "../../containers";
import { fetchParameters, fetchProducts, selectProducts } from "../../store/productsSlice";
import { fetchCategories, fetchOneCategory, resetOneCategory } from "../../store/categoriesSlice";
import "./Shop.scss"

const Shop = () => {
    const [searchParams] = useSearchParams();
    const query = useLocation().search;
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch All Products to get parameters with query
        dispatch(fetchParameters("&" + query.slice(1,)));

        // Fetch needed Products
        dispatch(fetchProducts(query.slice(1,)));
    }, [dispatch, query]);

    useEffect(() => {
        if (searchParams.get("categoryId")) {
            dispatch(fetchOneCategory(searchParams.get("categoryId")));
        } else {
            dispatch(resetOneCategory())
        }
    }, [dispatch, searchParams]);

    useEffect(() => {
        // Fetch Categories
        dispatch(fetchCategories());
    }, [dispatch])

    return (
        <>
            <Timeline page="Category" />

            <section className="section --fullPadding">
                <div className="container">
                    <div className="shop">
                        <Aside />
                        <Products products={products} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;