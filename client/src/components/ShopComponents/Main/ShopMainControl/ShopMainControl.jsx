import { Grid, Lines, List } from "../../../_SVG";
import "./ShopMainControl.scss";

const ShopMainControl = () => {
    return (
        <div className="shop__main-control">
            <div className="shop__main-control__position">
                <a href="#a" className="active"><Grid /></a>
                <a href="#a"><List /></a>
                <a href="#a"><Lines /></a>
            </div>

            <div className="shop__main-control__sort">
                <div className="shop__main-control__select">
                    <label htmlFor="show" className="shop__label">Show</label>
                    <select name="show" id="show" className="shop__select" defaultValue="12">
                        <option value="12">12</option>
                        <option value="8">8</option>
                    </select>
                </div>

                <div className="shop__main-control__select">
                    <label htmlFor="sort" className="shop__label">Sort By</label>
                    <select name="sort" id="sort" className="shop__select" defaultValue="--">
                        <option value="--" disabled>--</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ShopMainControl;