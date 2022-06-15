import { About, About2, Carousel, Footer, Intro, Logos, Middlebar, Navbar, Product, Slider, Tabs, Testimonial, Topbar } from "../../components";
import "./home.scss"

const Home = () => {
    const getProducts = () => {
        let data = [];

        for (let i = 0; i < 5; i++) {
            let img = `./images/product-${i + 1}.jpg`
            data.push(<Product key={i} img={img} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
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
            <Topbar />
            <Middlebar />
            <Navbar />
            <Intro />
            <About />

            <section className="section">
                <div className="container">

                    <h2 className="section__title">Trending products</h2>

                    <Tabs />

                    <Slider>
                        {getProducts()}
                    </Slider>

                </div>
            </section>

            <section
                className="section"
                style={{
                    backgroundImage: "url('https://placehold.jp/3d4070/ffffff/1500x1500.png')",
                    marginTop: "7rem",
                    padding: "13rem 0",
                    opacity: "0.6"
                }}
            >
                <div className="container" style={{ opacity: "1" }}>

                    <Carousel>
                        {getTestimonials()}
                    </Carousel>

                </div>
            </section>

            <About2 />

            <section className="section">
                <div className="container">

                    <h2 className="section__title">Special products</h2>

                    <Slider>
                        {getProducts()}
                    </Slider>

                </div>
            </section>

            <Logos />
            <Footer />
        </>
    )
}

export default Home;