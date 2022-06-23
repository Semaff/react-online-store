import "./Shop.scss"
import { Aside, Products, ShopMain, Timeline } from "../../containers";

const Shop = () => {
    const getProducts = () => {
        let data = [];
        for (let i = 0; i < 12; i++) {
            let img = `./images/product-${i + 1}.jpg`
            data.push({
                img,
                name: "Product",
                price: "105.25",
                oldPrice: "105.25",
                rating: 4.2
            });
        }
        return data;
    }

    return (
        <>
            <Timeline page="Category" />

            <section className="section --fullPadding">
                <div className="container">
                    <div className="shop">
                        <Aside />
                        <Products products={getProducts()} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;