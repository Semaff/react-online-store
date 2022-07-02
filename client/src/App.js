import { Footer, Middlebar, Navbar, Topbar } from './containers';
import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import { checkAuth, selectUserStatus } from './store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from './components';
import { fetchBasket } from './store/basketSlice';
import { fetchSaleProducts } from './store/productsSlice';
import AppRouter from './router/AppRouter';
import './App.scss';

function App() {
    const dispatch = useDispatch();
    const userStatus = useSelector(selectUserStatus);

    useEffect(() => {
        // Check auth and fetch User's basket
        dispatch(checkAuth());
        dispatch(fetchBasket());

        // Fetch Products on a sale
        dispatch(fetchSaleProducts());
    }, [dispatch]);

    if (userStatus === "pending") {
        return <Spinner />
    }

    return (
        <BrowserRouter>
            <Topbar />
            <Middlebar />
            <Navbar />

            <AppRouter />

            <Footer />
        </BrowserRouter>
    );
}

export default App;
