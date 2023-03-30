import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlePageLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;

export const getArticlePageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;

export const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page || 1;

export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;

export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
