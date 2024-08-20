import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../router/routerConsts";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro" style={{ backgroundImage: "url('./images/intro.jpg')" }}>
      <h2 className="intro__suptitle">Our specials</h2>
      <h1 className="intro__title">Fashion Trend</h1>

      <Link className="btn" to={SHOP_ROUTE}>
        Shop now
      </Link>
    </div>
  );
};

export default Intro;
