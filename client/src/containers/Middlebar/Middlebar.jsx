import { Link } from "react-router-dom";
import { Cart, Database, Phone, Profile } from "../../components/_SVG";
import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, PROFILE_ROUTE, SIGNIN_ROUTE } from "../../router/routerConsts";
import { useSelector } from "react-redux"
import { selectUser, selectUserLoggedIn } from "../../store/userSlice";
import { selectBasketProducts } from "../../store/basketSlice";
import "./Middlebar.scss";

const Middlebar = () => {
    const basketProducts = useSelector(selectBasketProducts);
    const isLoggedIn = useSelector(selectUserLoggedIn);
    const user = useSelector(selectUser);
    
    return (
        <nav className="middlebar" aria-label="middlebar">
            <div className="container">

                <div className="middlebar__inner">
                    <span className="middlebar__left">
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
                        <Link to={!isLoggedIn ? SIGNIN_ROUTE : PROFILE_ROUTE}>
                            <Profile />
                        </Link>

                        {isLoggedIn && (
                            <Link to={CART_ROUTE} style={{ textDecoration: "none" }}>
                                <div className="middlebar__cart">
                                    <Cart />

                                    {basketProducts && basketProducts.length > 0 && (
                                        <span>{basketProducts.length}</span>
                                    )}
                                </div>
                            </Link>
                        )}

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