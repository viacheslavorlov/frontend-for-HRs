import { Route, Routes } from 'react-router-dom';
import { Suspense, useCallback } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { AppRouteProps, routeConfig } from '../../shared/config/routeConfig/routes';
import { RequireAuth } from './RequireAuth';

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
                    ? (
                        <Suspense fallback={<PageLoader />}>
                            <RequireAuth roles={route.roles}>
                                {element}
                            </RequireAuth>
                        </Suspense>
                    )
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
