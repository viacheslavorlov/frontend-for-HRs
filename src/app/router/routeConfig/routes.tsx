import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';
import { NotFoundPage } from 'pages/ui/NotFoundPage';
import ProfilePage from 'pages/ui/ProfilePage/ui/ProfilePage';

type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AllRoutes {
    // eslint-disable-next-line no-unused-vars
    MAIN = 'main',
    // eslint-disable-next-line no-unused-vars
    ABOUT = 'about',
    // eslint-disable-next-line no-unused-vars
    PROFILE = 'profile',
    // eslint-disable-next-line no-unused-vars
    NOT_FOUND = 'not-found'
}

export const RoutePaths: Record<AllRoutes, string> = {
    [AllRoutes.MAIN]: '/',
    [AllRoutes.ABOUT]: '/about',
    [AllRoutes.PROFILE]: '/profile',
    // last
    [AllRoutes.NOT_FOUND]: '*',
};

// ? Более сложный вариант с Record
export const routeConfig: Record<AllRoutes, AppRouteProps> = {
    [AllRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AllRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    [AllRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AllRoutes.NOT_FOUND]: {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />,
    },
};

// ? более простой вариант с массивом
// export const routeConfig: RouteProps[] = [
//     {path: RoutePaths.main, element: <MainPage/>},
//     {path: RoutePaths.about, element: <AboutPage/>}
// ]
