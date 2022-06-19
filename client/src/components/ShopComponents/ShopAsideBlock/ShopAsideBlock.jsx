import "./ShopAsideBlock.scss";

const ShopAsideBlock = ({ title, children }) => {
    return (
        <div className="shop__aside-block">
            <div className="shop__aside-title">
                <h4>{title}</h4>
                <div className="toggle"></div>
            </div>

            {children}
        </div>
    )
}

export default ShopAsideBlock;