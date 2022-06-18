import { ShopMainHeader, ShopMainProducts } from "../../../components";
import "./ShopMain.scss";

const ShopMain = ({ products }) => {
    return (
        <div className="shop__main">
            <ShopMainHeader
                bannerName="Women's Ocassions"
                categoryType="Women"
                categoryDesc="Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore consequuntur
                magni dolores veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed"
            />
            <ShopMainProducts products={products} />
        </div>
    )
}

export default ShopMain;