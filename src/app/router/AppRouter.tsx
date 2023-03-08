import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/router/routeConfig/routes';
import { Suspense, useMemo } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{route.element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};
