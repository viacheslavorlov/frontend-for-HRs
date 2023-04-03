import { MainPageAsync } from './MainPage/MainPage.async';
import { AboutPageAsync } from './AboutPage/AboutPage.async';
import { ArticlePageAsync } from './ArticlePage/ui/ArticlePage.async';
import { ArticleDetailedPageAsync } from './ArticleDetaildPage/ui/ArticleDetailedPage.async';
import {
    ArticleDetailedCommentSchema,
} from './ArticleDetaildPage/model/types/ArticleDetailedCommentSchema';

export { ArticleDetailsPageSchema } from './ArticleDetaildPage/model/types';

export {
    ArticleDetailedCommentSchema,
    ArticlePageAsync as ArticlePage,
    ArticleDetailedPageAsync as ArticleDetailedPage,
    MainPageAsync as MainPage,
    AboutPageAsync as AboutPage,
};
