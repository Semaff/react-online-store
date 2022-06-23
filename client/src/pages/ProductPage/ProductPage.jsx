import { Product, Slider } from "../../components";
import { Timeline } from "../../containers";
import "./ProductPage.scss";

const ProductPage = () => {
    const getProducts = () => {
        let data = [];
        for (let i = 0; i < 5; i++) {
            let img = `./images/product-${i + 1}.jpg`
            data.push(<Product isCard key={i} img={img} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
        }
        return data;
    }

    return (
        <>
            <Timeline page="Product" />

            <section className="section">
                <div className="container">
                    <Product isFull />
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section__title">You might also like</h2>

                    <Slider>
                        {getProducts()}
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default ProductPage;