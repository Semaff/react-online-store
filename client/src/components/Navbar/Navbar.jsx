import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">

                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#a" className="nav__link">Electronics</a>
                    </li>
                    <li className="nav__item">
                        <a href="#a" className="nav__link">Men</a>
                    </li>
                    <li className="nav__item">
                        <a href="#a" className="nav__link">Women</a>
                    </li>
                    <li className="nav__item">
                        <a href="#a" className="nav__link">TVS & APPLIANCES</a>
                    </li>
                    <li className="nav__item">
                        <a href="#a" className="nav__link">ACCESSORIES</a>
                    </li>
                    <li className="nav__item">
                        <a href="#a" className="nav__link">SUPER DEALS</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;