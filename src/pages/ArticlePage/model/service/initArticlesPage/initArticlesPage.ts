import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/sortOrder';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlePageActions } from '../../slice/articlesSlice';
import { fetchArticlesList } from '../fetchArticles/fetchArticles';
import { getArticlePageInited } from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articles/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const inited = getArticlePageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const searchFromUrl = searchParams.get('search');
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlePageActions.setOrder(orderFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlePageActions.setSearch(searchFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlePageActions.setSort(sortFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl));
            }
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({ replace: false }));
        }
    },
);
