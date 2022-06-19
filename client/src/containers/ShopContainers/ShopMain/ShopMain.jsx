import { ShopMainHeader, ShopMainProducts } from "../../../components";
import "./ShopMain.scss";

const ShopMain = ({ products }) => {
    return (
        <div className="shop__main">
            <div className="shop__main-banner">
                <div className="shop__main-banner__content">
                    <i>Fashion Shop</i>
                    <span>Women's Ocassions</span>
                </div>
            </div>

            <div className="shop__main-desc">
                <h4>Women</h4>
                <p>
                    Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore consequuntur
                    magni dolores veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                </p>
            </div>

            <ShopMainProducts products={products} />
        </div>
    )
}

export default ShopMain;