import { ADMIN_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, PROFILE_ROUTE, SHOP_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from "./routerConsts";
import { Navigate } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import Shop from "../pages/Shop/Shop";
import Auth from "../pages/Auth/Auth";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";

export const publicRoutes = [
    { path: SIGNIN_ROUTE, element: <Auth /> },
    { path: SIGNUP_ROUTE, element: <Auth /> },
    { path: HOME_ROUTE, element: <Home /> },
    { path: SHOP_ROUTE, element: <Shop /> },
    { path: PRODUCT_ROUTE + '/:id', element: <ProductPage /> },
    { path: "*", element: <Navigate to={HOME_ROUTE} /> }
];

export const authRoutes = [
    { path: CART_ROUTE, element: <Cart /> },
    { path: CHECKOUT_ROUTE, element: <Checkout /> },
    { path: PROFILE_ROUTE, element: <Profile /> },
    { path: "*", element: <Navigate to={HOME_ROUTE} /> }
];

export const adminRoutes = [
    { path: ADMIN_ROUTE, element: <Admin /> },
];