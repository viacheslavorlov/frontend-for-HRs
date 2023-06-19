import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailedPage?.comments.isLoading;

export const getArticleCommentsError = (state: StateSchema) =>
    state.articleDetailedPage?.comments.error;
