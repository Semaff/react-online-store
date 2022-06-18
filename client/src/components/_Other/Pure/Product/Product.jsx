import "./Product.scss";

const Product = ({ image, name, rating, price, oldPrice }) => {
    return (
        <div className="product">
            <a className="product__img" href="#a">
                <img src={image} alt={name} />
            </a>

            <div className="product__content">
                <a className="product__name" href="#a">{name}</a>
                <div className="product__rating">Rating: {rating}</div>
                <div className="product__price">
                    ${price}
                    {oldPrice && (
                        <div className="product__price-old">${oldPrice}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product;