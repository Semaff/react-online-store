import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { Pagination, Product, ProductCard, Rating, RatingForm, Slider } from "../../components";
import { Timeline } from "../../containers";
import { fetchOneProduct, fetchProducts, selectProduct, selectProducts } from "../../store/productsSlice";
import { fetchProductRating, removeRatingError, selectProductRatings, selectRatingsError } from "../../store/ratingsSlice";
import { selectUserLoggedIn } from "../../store/userSlice";
import "./ProductPage.scss";

const ProductPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { id } = useParams();
    const products = useSelector(selectProducts);
    const product = useSelector(selectProduct);
    const productRating = useSelector(selectProductRatings);
    const ratingError = useSelector(selectRatingsError);
    const isLoggedIn = useSelector(selectUserLoggedIn);
    const dispatch = useDispatch();

    if (ratingError) {
        setTimeout(() => {
            dispatch(removeRatingError());
        }, 3000)
    }

    // Scroll to top onDidMount component
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /* Fetch Product and it's Rating */
    useEffect(() => {
        dispatch(fetchOneProduct(id));
        dispatch(fetchProductRating({ id }));
    }, [dispatch, id]);

    /* Change page of Ratings */
    useEffect(() => {
        if (searchParams.has("page")) {
            dispatch(fetchProductRating({ id, params: `page=${searchParams.get("page")}` }));
        }
    }, [dispatch, searchParams]);

    /* Fetch products with Product's categoryId */
    useEffect(() => {
        dispatch(fetchProducts(`categoryId=${product.categoryId}`));
    }, [dispatch, product]);

    /* Handle Page change (change search params) */
    const handlePageChange = (totalPages, pageIndex) => {
        if (pageIndex <= 0) {
            searchParams.set("page", 1);
        } else if (pageIndex >= totalPages) {
            searchParams.set("page", totalPages);
        } else {
            searchParams.set("page", pageIndex);
        }
        setSearchParams(searchParams);
    }

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
                    <h2 className="section__subtitle  --left">Reviews ({productRating.votes})</h2>

                    {Object.keys(productRating).length > 0 && productRating.ratings.rows.length > 0
                        ?
                        <>
                            {productRating.ratings.rows.map(rating => (
                                <Rating key={rating.id} {...rating} />
                            ))}

                            <Pagination
                                totalElements={productRating.ratings.count}
                                searchParams={searchParams}
                                handlePageChange={handlePageChange}
                            />
                        </>
                        :
                        <p className="section__none">This product doesn't have any ratings!</p>
                    }

                    {isLoggedIn && (
                        <RatingForm productId={id} />
                    )}

                    {ratingError && (
                        <div className="error">{ratingError.message}</div>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section__title">You might also like</h2>

                    <Slider>
                        {Object.keys(products).length > 0 && products.rows.filter(el => +el.id !== +id).map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default ProductPage;