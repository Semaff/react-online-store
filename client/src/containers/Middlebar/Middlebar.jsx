import { Cart, Phone, Profile, Search } from "../../components/_SVG";
import "./Middlebar.scss";

const Middlebar = () => {
    return (
        <nav className="middlebar" aria-label="middlebar">
            <div className="container">

                <div className="middlebar__inner">
                    <span className="middlebar__left">
                        <div className="middlebar__select">
                            <select name="currency" id="currency">
                                <option value="USD">USD</option>
                                <option value="RUB">RUB</option>
                            </select>
                            <span className="middlebar__select-focus"></span>
                        </div>

                        <div className="middlebar__select">
                            <select name="language" id="language">
                                <option value="English">English</option>
                                <option value="Russian">Russian</option>
                            </select>
                            <span className="middlebar__select-focus"></span>
                        </div>

                        <div className="middlebar__phone">
                            <Phone />
                            <a href="tel:+095587-55680">095587-55680</a>
                        </div>
                    </span>

                    <span className="middlebar__logo">
                        <img src="./images/logo.png" alt="logo" />
                    </span>

                    <span className="middlebar__right">
                        <Search />
                        <Profile />
                        <Cart />
                    </span>
                </div>

            </div>
        </nav>
    )
}

export default Middlebar;