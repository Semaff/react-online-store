import { useState } from "react";
import { CategoriesList, MyRange, Product } from "../../components";
import "./Aside.scss";

const AsideBlock = ({ title, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="aside__block">
            <div className="aside__title">
                <h4>{title}</h4>
                <button
                    type="button"
                    className={`toggle ${visible ? "active" : ""}`}
                    onClick={() => setVisible(!visible)}
                />
            </div>

            <div className="aside__content" style={{ maxHeight: visible ? "unset" : "", paddingTop: visible ? "2rem" : "" }}>
                {children}
            </div>
        </div>
    )
}

const Aside = () => {

    const categories = [
        {
            name: "Jackets",
            amount: "120",
            subcategories: ["Lorem ipsum", "Donec vitae"]
        },
        {
            name: "Jeans & chinos",
            amount: "55",
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
        <aside className="aside">
            {/* Aside Config */}
            <div className="aside__section">
                <AsideBlock title="Categories">
                    <CategoriesList categories={categories} />
                </AsideBlock>

                <AsideBlock title="Price">
                    <MyRange />
                </AsideBlock>

                <AsideBlock title="Color">
                    {colors.map(color => (
                        <button type="button" className="aside__color" key={color.name}>
                            <div className="color" style={{ background: `${color.hex}` }}></div>
                            {color.name} ({color.amount})
                        </button>
                    ))}
                </AsideBlock>

                <AsideBlock title="Size">
                    {sizes.map((size, index) => (
                        <div className="checkbox__flexbox" key={index}>
                            <input type="checkbox" className="checkbox" id={`size-${size.name}`} />

                            <label htmlFor={`size-${size.name}`} className="label">
                                {size.name} ({size.amount})
                            </label>
                        </div>
                    ))}
                </AsideBlock>
            </div>

            {/* Aside Banner */}
            <div className="aside__section">
                <a className="aside__banner" href="#a">
                    <img src="./images/product-5.jpg" alt="aside" />

                    <div className="aside__banner-text">
                        <b>Discover</b>
                        <span>the lifestyle</span>
                    </div>
                </a>
            </div>

            {/* Aside Products */}
            <div className="aside__section">
                <div className="aside__title">
                    <h4>Sale products</h4>
                </div>

                <div className="aside__products">
                    {productsThatOnASale.map(product => (
                        <Product isMini key={product.name} {...product} />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Aside;