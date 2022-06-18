import "./ShopMainGrid.scss";

const ShopMainGrid = ({ products }) => {
    return (
        <div className="shop__main-grid">
            {products?.length > 0 && products.map(product => (
                product
            ))}
        </div>
    )
}

export default ShopMainGrid;