import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product, Slider } from "../../components";
import ProductCard from "../../components/Product/ProductCard";
import { Timeline } from "../../containers";
import { fetchOneProduct, fetchProducts, selectProduct, selectProducts } from "../../store/productsSlice";
import "./ProductPage.scss";

const ProductPage = () => {
    const { id } = useParams();
    const products = useSelector(selectProducts);
    const product = useSelector(selectProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneProduct(id));
        dispatch(fetchProducts(`categoryId=${product.categoryId}`));
    }, [dispatch, id]);

    return (
        <>
            <Timeline page="Product" />

            <section className="section">
                <div className="container">
                    <Product isFull {...product} />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section__title">You might also like</h2>

                    <Slider>
                        {Object.keys(products).length > 0 && products.rows.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default ProductPage;