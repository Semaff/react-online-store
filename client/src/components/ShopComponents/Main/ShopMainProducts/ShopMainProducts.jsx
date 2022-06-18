import ShopMainControl from "../ShopMainControl/ShopMainControl";
import ShopMainGrid from "../ShopMainGrid/ShopMainGrid";
import ShopMainPagination from "../ShopMainPagination/ShopMainPagination";

const ShopMainProducts = ({ products }) => {
    return (
        <>
            <ShopMainControl />
            <ShopMainGrid products={products} />
            <ShopMainPagination />
        </>
    )
}

export default ShopMainProducts;