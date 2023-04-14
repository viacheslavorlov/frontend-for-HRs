import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { ArticleDetailedPage } from 'pages/ArticleDetaildPage';
import ArticlePage from 'pages/ArticlePage/ui/ArticlePage/ArticlePage';
import { AboutPage } from 'pages/AboutPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type AppRouteProps = RouteProps & {
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
    ARTICLES = 'articles',
    // eslint-disable-next-line no-unused-vars
    ARTICLE_DETAILS = 'article_details',
    // eslint-disable-next-line no-unused-vars
    ARTICLE_CREATE = 'article_create',
    // eslint-disable-next-line no-unused-vars
    ARTICLE_EDIT = 'article_edit',
    // eslint-disable-next-line no-unused-vars
    NOT_FOUND = 'not-found'
}

export const RoutePaths: Record<AllRoutes, string> = {
    [AllRoutes.MAIN]: '/',
    [AllRoutes.ABOUT]: '/about',
    [AllRoutes.PROFILE]: '/profile/',
    [AllRoutes.ARTICLES]: '/articles',
    [AllRoutes.ARTICLE_DETAILS]: '/articles/', // ? + :id
    [AllRoutes.ARTICLE_CREATE]: '/articles/new',
    [AllRoutes.ARTICLE_EDIT]: '/articles/:id/edit', // ? + :id
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
        path: `${RoutePaths.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLES]: {
        path: RoutePaths.articles,
        element: <ArticlePage />,
        authOnly: true,

    },
    [AllRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePaths.article_details}:id`,
        element: <ArticleDetailedPage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLE_EDIT]: {
        path: `${RoutePaths.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLE_CREATE]: {
        path: `${RoutePaths.article_create}/new`,
        element: <ArticleEditPage />,
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
