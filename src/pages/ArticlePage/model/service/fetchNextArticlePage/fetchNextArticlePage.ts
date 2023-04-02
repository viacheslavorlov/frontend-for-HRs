import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageHasMore,
    getArticlePageLoading,
    getArticlePageNum,
} from '../../selectors/articlePageSelectors';
import { articlePageActions } from '../../slice/articlesSlice';
import { fetchArticlesList } from '../fetchArticles/fetchArticles';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const page = getArticlePageNum(getState());
        const hasMore = getArticlePageHasMore(getState());
        const isLoading = getArticlePageLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({ replace: false }));
        }
    },
);
