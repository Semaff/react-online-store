import { Footer, Middlebar, Navbar, Topbar } from './containers';
import { HashRouter } from "react-router-dom";
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
        dispatch(checkAuth());
        dispatch(fetchSaleProducts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchBasket());
    }, [dispatch, userStatus])

    if (userStatus === "pending") {
        return <Spinner />
    }

    return (
        <HashRouter>
            <Topbar />
            <Middlebar />
            <Navbar />

            <AppRouter />

            <Footer />
        </HashRouter>
    );
}

export default App;
