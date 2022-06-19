import { Gallery, ProductCard, Slider } from "../../components";
import { ProductDescription, Timeline } from "../../containers";
import "./ProductPage.scss";

const ProductPage = () => {
    const images = [
        { img: "./images/product-1.jpg" },
        { img: "./images/product-2.jpg" },
        { img: "./images/product-3.jpg" },
        { img: "./images/product-4.jpg" },
        { img: "./images/product-5.jpg" },
    ]

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
            <Timeline page="Product" />

            <section className="section">
                <div className="container">
                    <div className="product__inner">
                        <Gallery images={images} />
                        <ProductDescription />
                    </div>
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