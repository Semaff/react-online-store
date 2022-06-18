import { Arrow } from "../../../_SVG";
import "./ShopMainPagination.scss";

const ShopMainPagination = () => {
    return (
        <div className="shop__main-pagination">
            <p className="shop__main-pagination__info">
                Showing 1 to 9 of 11 (2 pages)
            </p>

            <div className="shop__main-pagination__btns">
                <button className="btn --rounded --border --reversed"><Arrow /></button>
                <button className="btn active --rounded --border">1</button>
                <button className="btn --rounded --border">2</button>
                <button className="btn --rounded --border">3</button>
                <button className="btn --rounded --border"><Arrow /></button>
            </div>
        </div>
    )
}

export default ShopMainPagination;