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
    ADMIN_PANEL = 'admin_panel',
    // eslint-disable-next-line no-unused-vars
    NOT_FOUND = 'not-found',
    // eslint-disable-next-line no-unused-vars
    FORBIDDEN_PAGE = 'forbidden'
}

export const RoutePaths: Record<AllRoutes, string> = {
    [AllRoutes.MAIN]: '/',
    [AllRoutes.ABOUT]: '/about',
    [AllRoutes.PROFILE]: '/profile/',
    [AllRoutes.ARTICLES]: '/articles',
    [AllRoutes.ARTICLE_DETAILS]: '/articles/', // ? + :id
    [AllRoutes.ARTICLE_CREATE]: '/article/new',
    [AllRoutes.ARTICLE_EDIT]: '/articles/:id/edit', // ? + :id
    [AllRoutes.ADMIN_PANEL]: '/admin',
    [AllRoutes.FORBIDDEN_PAGE]: '/forbidden',
    // last
    [AllRoutes.NOT_FOUND]: '*',
};
