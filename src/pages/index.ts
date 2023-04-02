import { MainPageAsync } from './MainPage/MainPage.async';
import { AboutPageAsync } from './AboutPage/AboutPage.async';
import { ArticlePageAsync } from './ArticlePage/ui/ArticlePage.async';
import { ArticleDetailedPageAsync } from './ArticleDetaildPage/ArticleDetailedPage.async';
import {
    ArticleDetailedCommentSchema,
} from './ArticleDetaildPage/CommentsEntitie/types/ArticleDetailedCommentSchema';

export {
    ArticleDetailedCommentSchema,
    ArticlePageAsync as ArticlePage,
    ArticleDetailedPageAsync as ArticleDetailedPage,
    MainPageAsync as MainPage,
    AboutPageAsync as AboutPage,
};
