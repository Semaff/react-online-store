import "./ShopMainHeader.scss";

const ShopMainHeader = ({ bannerName, categoryType, categoryDesc }) => {
    return (
        <>
            <div className="shop__main-header__banner">
                <div className="shop__main-header__banner-content">
                    <i className="shop__main-header__banner-name">Fashion Shop</i>
                    <span className="shop__main-header__banner-type">{bannerName}</span>
                </div>
            </div>

            <div className="shop__main-header__desc">
                <h5 className="shop__main-header__desc-type">{categoryType}</h5>
                <p className="shop__main-header__desc-content">{categoryDesc}</p>
            </div>
        </>
    )
}

export default ShopMainHeader;