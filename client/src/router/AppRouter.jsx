import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, authRoutes, publicRoutes } from './routes';
import { useSelector } from "react-redux";
import { selectUserLoggedIn } from '../store/userSlice';

const AppRouter = () => {
    const isAdmin = true;
    const isLoggedIn = useSelector(selectUserLoggedIn);

    return (
        <Routes>
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {isLoggedIn && authRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {isAdmin && adminRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    )
}

export default AppRouter;