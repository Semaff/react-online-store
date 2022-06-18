import { MyRange, ShopAsideBanner, ShopAsideBlock, ShopAsideCategories, ShopAsideColors, ShopAsideProducts, ShopAsideSizes } from "../../../components";
import "./ShopAside.scss";

const ShopAside = () => {
    const categories = [
        {
            name: "Jackets",
            price: "120",
            subcategories: ["Lorem ipsum", "Donec vitae"]
        },
        {
            name: "Jeans & chinos",
            price: "55",
            subcategories: ["Dolor", "Sit amet"]
        }
    ];

    const colors = [
        { hex: "#333333", name: "Black", amount: "4" },
        { hex: "#11426b", name: "Blue", amount: "3" },
        { hex: "#7d5a3c", name: "Brown", amount: "3" },
        { hex: "#ffffff", name: "White", amount: "3" },
    ];

    const sizes = [
        { name: "L", amount: 4 },
        { name: "XS", amount: 3 },
        { name: "S", amount: 3 },
        { name: "XL", amount: 3 },
    ];

    const productsThatOnASale = [
        { image: "./images/product-1.jpg", name: "Product1", rating: "4.1", price: "100.00", oldPrice: "150.00" },
        { image: "./images/product-2.jpg", name: "Product2", rating: "4.3", price: "110.00", oldPrice: "171.00" },
        { image: "./images/product-3.jpg", name: "Product3", rating: "4.2", price: "105.00", oldPrice: "160.00" },
        { image: "./images/product-4.jpg", name: "Product4", rating: "3.2", price: "101.00", oldPrice: "110.00" },
    ].slice(0, 3);

    return (
        <aside className="shop__aside">
            <div className="shop__aside-section">
                <ShopAsideBlock title="Categories">
                    <ShopAsideCategories categories={categories} />
                </ShopAsideBlock>

                <ShopAsideBlock title="Price">
                    <MyRange />
                </ShopAsideBlock>

                <ShopAsideBlock title="Color">
                    <ShopAsideColors colors={colors} />
                </ShopAsideBlock>
                
                <ShopAsideBlock title="Size">
                    <ShopAsideSizes sizes={sizes} />
                </ShopAsideBlock>
            </div>

            <div className="shop__aside-section"><ShopAsideBanner /></div>

            <div className="shop__aside-section">
                <ShopAsideProducts products={productsThatOnASale} />
            </div>
        </aside>
    )
}

export default ShopAside;