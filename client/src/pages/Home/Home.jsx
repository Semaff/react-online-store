import { ProductCard, Slider, Tabs } from "../../components";
import { HomeAbout, HomeAbout2, HomeIntro, HomeLogos, HomeTestimonials } from "../../containers";
import "./Home.scss"

const Home = () => {
    const getProducts = () => {
        let data = [];
        for (let i = 0; i < 5; i++) {
            let img = `./images/product-${i + 1}.jpg`
            data.push(<ProductCard key={i} img={img} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
        }
        return data;
    }

    return (
        <>
            <HomeIntro />
            <HomeAbout />

            <section className="section">
                <div className="container">

                    <h2 className="section__title">Trending products</h2>

                    <Tabs />

                    <Slider>
                        {getProducts()}
                    </Slider>

                </div>
            </section>

            <HomeTestimonials />
            <HomeAbout2 />

            <section className="section">
                <div className="container">

                    <h2 className="section__title">Special products</h2>

                    <Slider>
                        {getProducts()}
                    </Slider>

                </div>
            </section>

            <HomeLogos />
        </>
    )
}

export default Home;