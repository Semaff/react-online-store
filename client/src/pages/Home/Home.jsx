import { Carousel, Slider, Spinner, Tabs, Testimonial } from "../../components";
import { About, Logos, Intro } from "../../containers";
import { useSelector, useDispatch } from "react-redux";
import "./Home.scss"
import { fetchAllProducts, fetchProductsOnASale, selectProducts, selectProductsOnASale } from "../../store/productsSlice";
import { useEffect } from "react";
import ProductCard from "../../components/Product/ProductCard";

const getTestimonials = () => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        data.push(<Testimonial key={i} />)
    }
    return data;
}

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const productsOnASale = useSelector(selectProductsOnASale);

    useEffect(() => {
        dispatch(fetchAllProducts("?order=4"));
        dispatch(fetchProductsOnASale(""));
    }, [dispatch]);

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
                    <h2 className="section__title">Products on a sale</h2>

                    <Tabs />
                    <Slider>
                        {Object.keys(productsOnASale).length === 0
                            ? <Spinner />
                            : productsOnASale.rows.map(product => (
                                <ProductCard {...product} key={product.id} />
                            ))
                        }
                    </Slider>
                </div>
            </section>

            {/* Carousel with Testimonials */}
            <section className="section  --addMargin --extraPadding" style={{
                background: "url('./images/testimonials.jpg') center no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="container" style={{ opacity: 1 }}>
                    <Carousel>
                        {getTestimonials()}
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
                    <h2 className="section__title">New products</h2>

                    <Slider>
                        {Object.keys(products).length === 0
                            ? <Spinner />
                            : products.rows.map(product => (
                                <ProductCard {...product} key={product.id} />
                            ))
                        }
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