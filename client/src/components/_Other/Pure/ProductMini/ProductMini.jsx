import "./ProductMini.scss";

const ProductMini = ({ image, name, rating, price, oldPrice }) => {
    return (
        <div className="product-mini">
            <a className="product-mini__img" href="#a">
                <img src={image} alt={name} />
            </a>

            <div className="product-mini__content">
                <a className="product-mini__name" href="#a">{name}</a>
                <div className="product-mini__rating">Rating: {rating}</div>
                <div className="product-mini__price">
                    ${price}
                    {oldPrice && (
                        <div className="product-mini__price-old">${oldPrice}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductMini;