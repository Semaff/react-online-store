import { Carousel, Product, Slider, Tabs, Testimonial } from "../../components";
import { About, Logos, Intro } from "../../containers";
import "./Home.scss"

const Home = () => {
    const getProducts = () => {
        let data = [];
        for (let i = 0; i < 5; i++) {
            let img = `./images/product-${i + 1}.jpg`
            data.push(<Product isCard key={i} img={img} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
        }
        return data;
    }

    const getTestimonials = () => {
        let data = [];

        for (let i = 0; i < 10; i++) {
            data.push(<Testimonial key={i} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
        }

        return data;
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
                    <h2 className="section__title">Trending products</h2>

                    <Tabs />
                    <Slider>
                        {getProducts()}
                    </Slider>
                </div>
            </section>

            {/* Carousel with Testimonials */}
            <section className="section  --addMargin --extraPadding  --lowOpacity" style={{
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
                    <h2 className="section__title">Special products</h2>

                    <Slider>
                        {getProducts()}
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