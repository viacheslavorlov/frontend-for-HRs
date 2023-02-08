import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routes';
import { Suspense } from 'react';
import { PageLoader } from 'wigets/PageLoader/PageLoader';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map((route) => (
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
