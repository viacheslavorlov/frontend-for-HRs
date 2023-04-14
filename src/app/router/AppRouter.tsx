import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'app/router/routeConfig/routes';
import { Suspense, useCallback } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from 'app/router/RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? <Suspense fallback={<PageLoader />}><RequireAuth>{element}</RequireAuth></Suspense>
                    : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};
