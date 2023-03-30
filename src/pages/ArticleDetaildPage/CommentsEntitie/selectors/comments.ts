import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailedComment?.isLoading;

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailedComment?.error;
