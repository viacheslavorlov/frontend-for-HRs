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

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleNew = () => '/article/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
