import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticles/fetchArticles';
import { fetchNextArticlePage } from './fetchNextArticlePage';

// jest.mock('axios');
jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlePage test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 2,
                limit: 3,
                hasMore: true,
                entities: {},
                ids: [],
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ replace: false });
    });

    test('unsuccessful', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: false,
                page: 2,
                limit: 3,
                hasMore: false,
                entities: {},
                ids: [],
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('unsuccessful', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlesPage: {
                isLoading: true,
                page: 2,
                limit: 3,
                hasMore: true,
                entities: {},
                ids: [],
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
