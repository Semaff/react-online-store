import { Carousel, Slider, Spinner, Tabs, Testimonial } from "../../components";
import { About, Logos, Intro } from "../../containers";
import { useSelector, useDispatch } from "react-redux";
import "./Home.scss"
import { useEffect } from "react";
import ProductCard from "../../components/Product/ProductCard";
import { fetchProducts, fetchSaleProducts, selectProducts, selectProductsStatus, selectSaleProducts } from "../../store/productsSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchTestimonials, selectTestimonials } from "../../store/testimonialsSlice";

const Home = () => {
    const [, setSearchParams] = useSearchParams();
    const query = useLocation().search;
    const dispatch = useDispatch();

    const products = useSelector(selectProducts);
    const productsOnASale = useSelector(selectSaleProducts);
    const testimonials = useSelector(selectTestimonials);

    const productsStatus = useSelector(selectProductsStatus);

    useEffect(() => {
        // Fetch Sale Products
        dispatch(fetchSaleProducts(""));

        // Fetch Products for slider with tabs
        if (query) {
            dispatch(fetchProducts(query.slice(1)));
        } else {
            dispatch(fetchProducts("order=4"));
        }

        // Fetch Testimonials
        dispatch(fetchTestimonials());
    }, [dispatch, query]);

    // Change 'order' query to fetch right Products
    const handleTabClick = (orderNum) => {
        setSearchParams({ order: orderNum });
    }

    return (
        <>
            {/* Intro */}
            <section className="section  --padding0">
                <div className="container">
                    <Intro />
                </div>
            </section>

            {/* About */}
            <section className="section">
                <div className="container  --shrinked">
                    <About />
                </div>
            </section>

            {/* Slider with trending Products */}
            <section className="section">
                <div className="container">
                    <h2 className="section__title">Featured Products</h2>

                    <Tabs onClick={handleTabClick} />
                    <Slider>
                        {(Object.keys(products).length === 0 || productsStatus === "pending") &&
                            <div className="loading">
                                <Spinner />
                            </div>
                        }

                        {products?.rows?.map(product => (
                            <ProductCard {...product} key={product.id} />
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Carousel with Testimonials */}
            <section className="section  --addMargin --extraPadding" style={{
                background: "url('./images/testimonials.jpg') center no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="container">
                    <Carousel>
                        {testimonials && testimonials.length > 0 && testimonials.map(testimonial => (
                            <Testimonial {...testimonial} key={testimonial.id} />
                        ))}
                    </Carousel>
                </div>
            </section>

            {/* About Mini */}
            <section className="section">
                <div className="container  --shrinked">
                    <About isMini />
                </div>
            </section>

            {/* Slider with special Products */}
            <section className="section">
                <div className="container">
                    <h2 className="section__title">Products on a sale</h2>

                    <Slider>
                        {(Object.keys(products).length === 0 || productsStatus === "pending") &&
                            <div className="loading">
                                <Spinner />
                            </div>
                        }

                        {productsOnASale?.rows?.map(product => (
                            <ProductCard {...product} key={product.id} />
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Logos */}
            <section className="section  --fullPadding">
                <div className="container  --shrinked">
                    <Logos />
                </div>
            </section>
        </>
    )
}

export default Home;