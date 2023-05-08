import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsRecommendationIsLoading = (state: StateSchema) => (
    state.articleDetailedPage?.recommendations.isLoading
);

export const getArticleDetailsRecommendationError = (state: StateSchema) => (
    state.articleDetailedPage?.recommendations.error
);
