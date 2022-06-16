import { Product, Slider, Tabs } from "../../components";
import { About, About2, Footer, Intro, Logos, Middlebar, Navbar, Testimonials, Topbar } from "../../containers";
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

            <Testimonials />
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