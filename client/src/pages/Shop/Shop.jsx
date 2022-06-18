import "./Shop.scss"
import { ShopAside, ShopMain, Timeline } from "../../containers";
import { ProductCard } from "../../components";

const Shop = () => {
    const getProducts = () => {
        let data = [];
        for (let i = 0; i < 12; i++) {
            let img = `./images/product-${i + 1}.jpg`
            data.push(<ProductCard mini key={i} img={img} name={"Product"} price={105.25} oldPrice={105.25} rating={4.2} />)
        }
        return data;
    }

    return (
        <>
            <Timeline page="Category" />

            <section className="shop">
                <div className="container">
                    <div className="shop__inner">
                        <ShopAside />
                        <ShopMain products={getProducts()} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;