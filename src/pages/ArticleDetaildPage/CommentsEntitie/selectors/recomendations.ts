import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendationIsLoading = (state: StateSchema) => (
    state.articleDetailsRecommendations?.isLoading
);

export const getArticleDetailsRecommendationError = (state: StateSchema) => state.articleDetailsRecommendations?.error;
