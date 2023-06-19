import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getNewArticle } from '../selectors/newArticleSelectors';

export const postArticle = createAsyncThunk<Article, void, ThunkConfig<string>>(
    'newArticle/postArticle',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI;
        const newArticle = getNewArticle(getState());
        if (!newArticle) {
            return thunkAPI.rejectWithValue('Cannot post article, no article found');
        }
        try {
            const response = await extra.api.post('http://localhost:8000/articles', newArticle);
            if (!response.data) {
                return rejectWithValue('Cannot post article');
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Cannot post article');
        }
    },
);
