import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlePageActions } from '../../slice/articlesSlice';
import { fetchArticlesList } from '../fetchArticles/fetchArticles';
import { getArticlePageInited } from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/initArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const inited = getArticlePageInited(getState());

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
