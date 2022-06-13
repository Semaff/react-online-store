import { About, Intro, Middlebar, Navbar, Product, Slider, Topbar } from "../../components";
import "./home.scss"

const Home = () => {
    const getProducts = () => {
        let data = [];

        for (let i = 0; i < 10; i++) {
            data.push(<Product key={i} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
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

                    <Slider>
                        {getProducts()}
                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Home;