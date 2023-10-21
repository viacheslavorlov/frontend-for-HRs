import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../routeConfig/routes';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <Suspense fallback={<PageLoader />}>
                            <RequireAuth roles={route?.roles}>{element}</RequireAuth>
                        </Suspense>
                    ) : (
                        <Suspense fallback={<PageLoader />}>{element}</Suspense>
                    )
                }
            />
        );
    }, []);
    // @ts-ignore
    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
