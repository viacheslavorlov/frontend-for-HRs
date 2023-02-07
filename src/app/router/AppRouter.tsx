import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routes';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={
                    <div className="page-wrapper">{route.element}</div>
                }
            />
        ))}
    </Routes>
);
