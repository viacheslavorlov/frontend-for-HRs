import { MainPageAsync } from 'pages/ui/MainPage/MainPage.async';
import { AboutPageAsync } from 'pages/ui/AboutPage/AboutPage.async';
import { ArticlePageAsync } from 'pages/ui/ArticlePage/ArticlePage.async';
import { ArticleDetailedPageAsync } from 'pages/ui/ArticleDetaildPage/ArticleDetailedPage.async';
import {
    ArticleDetailedCommentSchema,
} from 'pages/ui/ArticleDetaildPage/CommentsEntitie/types/ArticleDetailedCommentSchema';

export {
    ArticleDetailedCommentSchema,
    ArticlePageAsync as ArticlePage,
    ArticleDetailedPageAsync as ArticleDetailedPage,
    MainPageAsync as MainPage,
    AboutPageAsync as AboutPage,
};
