import { CART_ROUTE, CHECKOUT_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE } from "./routerConsts";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import Shop from "../pages/Shop/Shop";

export const publicRoutes = [
    { path: HOME_ROUTE, element: <Home /> },
    { path: SHOP_ROUTE, element: <Shop /> },
    { path: PRODUCT_ROUTE, element: <ProductPage /> }
];

export const authRoutes = [
    { path: CART_ROUTE, element: <Cart /> },
    { path: CHECKOUT_ROUTE, element: <Checkout /> },
];

export const adminRoutes = [];