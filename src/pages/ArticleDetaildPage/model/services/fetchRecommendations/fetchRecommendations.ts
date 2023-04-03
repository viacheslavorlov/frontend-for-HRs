import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleType } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageLimit, getArticlePageNum,
    getArticlePageOrder, getArticlePageSearch,
    getArticlePageSort, getArticlePageType,
} from 'pages/ArticlePage/model/selectors/articlePageSelectors';

export const fetchRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetailedPage/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
