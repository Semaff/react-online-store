import './App.scss';
import { Footer, Middlebar, Navbar, Topbar } from './containers';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import { checkAuth, selectUserStatus } from './store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from './components';

function App() {
    const dispatch = useDispatch();
    const userStatus = useSelector(selectUserStatus);

    useEffect(() => {
        dispatch(checkAuth());
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
