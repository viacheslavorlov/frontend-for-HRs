import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticleDetailedPage } from '@/pages/ArticleDetaildPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { AboutPage } from '@/pages/AboutPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { UserRole } from '@/entities/User';
import { AllRoutes, RoutePaths } from '@/shared/const/routerConst';
import { AppRouteProps } from '@/shared/types/router';

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
    [AllRoutes.ARTICLE_CREATE]: {
        path: `${RoutePaths.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AllRoutes.ARTICLE_EDIT]: {
        path: `${RoutePaths.article_details}:id/edit`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AllRoutes.ADMIN_PANEL]: {
        path: `${RoutePaths.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AllRoutes.NOT_FOUND]: {
        path: RoutePaths['not-found'],
        element: <NotFoundPage />,
    },
    [AllRoutes.FORBIDDEN_PAGE]: {
        path: RoutePaths.forbidden,
        element: <ForbiddenPage />,
    },
};

// ? более простой вариант с массивом
// export const routeConfig: RouteProps[] = [
//     {path: RoutePaths.main, element: <MainPage/>},
//     {path: RoutePaths.about, element: <AboutPage/>}
// ]
