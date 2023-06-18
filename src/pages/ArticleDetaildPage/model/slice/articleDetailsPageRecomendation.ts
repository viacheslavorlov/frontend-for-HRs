import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchRecommendations } from '../services/fetchRecommendations/fetchRecommendations';
import { ArticleDetailsPageRecommendationSchema } from '../types/ArticleDetailsPageRecomendationSchema';

const initialState: ArticleDetailsPageRecommendationSchema = {
    entities: {},
    ids: [],
    isLoading: false,
    error: undefined,
};

const recomendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recomendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailedPage?.recommendations || recomendationAdapter.getInitialState(),
);

export const articleDetailsPageRecomendationSlice = createSlice({
    name: 'articleDetailsPageRecomendation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recomendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecomendationReducer, actions: articleDetailsPageRecomendationActions } =
    articleDetailsPageRecomendationSlice;
