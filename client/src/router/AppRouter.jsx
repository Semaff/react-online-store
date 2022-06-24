import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';

const AppRouter = () => {
    const auth = true;
    const isAdmin = true;

    return (
        <Routes>
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {auth && authRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}

            {isAdmin && authRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    )
}

export default AppRouter;