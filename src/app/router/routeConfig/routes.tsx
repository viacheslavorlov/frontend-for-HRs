import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailedPage } from '@/pages/ArticleDetaildPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    AllRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticleNew,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/routerConst';
import { AppRouteProps } from '@/shared/types/router';

// ? Более сложный вариант с Record
export const routeConfig: Record<AllRoutes, AppRouteProps> = {
    [AllRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AllRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AllRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailedPage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleNew(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AllRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AllRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
    [AllRoutes.FORBIDDEN_PAGE]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
};

// ? более простой вариант с массивом
// export const routeConfig: RouteProps[] = [
//     {path: RoutePaths.main, element: <MainPage/>},
//     {path: RoutePaths.about, element: <AboutPage/>}
// ]
