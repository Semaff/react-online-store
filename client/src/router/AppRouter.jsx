import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, authRoutes, publicRoutes } from './routes';
import { useSelector } from "react-redux";
import { selectUser, selectUserLoggedIn } from '../store/userSlice';

const AppRouter = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectUserLoggedIn);

    return (
        <Routes>
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {isLoggedIn && authRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {user.role === "ADMIN" && adminRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    )
}

export default AppRouter;