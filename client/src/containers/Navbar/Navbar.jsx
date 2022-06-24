import { useState } from "react";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../router/routerConsts";
import "./Navbar.scss";

const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className={`navbar ${active ? "active" : ""}`} aria-label="navbar">
            <div className="container">

                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to={SHOP_ROUTE + "?typeId=7"} className="nav__link">Electronics</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={SHOP_ROUTE + "?gender=men"} className="nav__link">Men</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={SHOP_ROUTE + "?gender=women"} className="nav__link">Women</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={SHOP_ROUTE + "?typeId=5"} className="nav__link">Jeans</Link>
                    </li>
                    <li className="nav__item">
                        <Link to={SHOP_ROUTE + "?typeId=2"} className="nav__link">Dress</Link>
                    </li>
                </ul>

                <div className={`navbar__burger ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
                    <span className="navbar__burger-line">Menu</span>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;