import { Link } from "react-router-dom";
import { Cart, Database, Phone, Profile, Search } from "../../components/_SVG";
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, PROFILE_ROUTE, SIGNIN_ROUTE } from "../../router/routerConsts";
import { useSelector } from "react-redux"
import { selectUser, selectUserLoggedIn } from "../../store/userSlice";
import "./Middlebar.scss";

const Middlebar = () => {
    const isLoggedIn = useSelector(selectUserLoggedIn);
    const user = useSelector(selectUser);

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
                        <Link to={HOME_ROUTE}>
                            <img src="./images/logo.png" alt="logo" />
                        </Link>
                    </span>

                    <span className="middlebar__right">
                        <Search />
                        <Link to={!isLoggedIn ? SIGNIN_ROUTE : PROFILE_ROUTE}>
                            <Profile />
                        </Link>
                        <Link to={CART_ROUTE}>
                            <Cart />
                        </Link>

                        {user?.role === "ADMIN" && (
                            <Link to={ADMIN_ROUTE}>
                                <Database />
                            </Link>
                        )}
                    </span>
                </div>

            </div>
        </nav>
    )
}

export default Middlebar;