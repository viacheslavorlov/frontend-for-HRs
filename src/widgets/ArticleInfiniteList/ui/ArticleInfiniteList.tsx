import { memo, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlePageFilters } from '../../ArticlePageFilters/ui/ArticlePageFilters';
import { fetchNextArticlePage } from '../model/service/fetchNextArticlePage/fetchNextArticlePage';
import {
    getArticlePageError,
    getArticlePageHasMore,
    getArticlePageLoading,
    getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import { getArticles } from '../model/slice/articlesSlice';

interface ArticleInfiniteListProps {
    className?: string;
    Header?: ReactNode;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className, Header } = props;
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView) || ArticleView.SMALL;
    const hasMore = useSelector(getArticlePageHasMore);
    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlePage());
        }
    }, [dispatch, hasMore]);

    return (
        <>
            <ArticlePageFilters />
            <ArticleList
                articles={articles}
                view={view}
                searchParams
                isLoading={isLoading}
                target="_blank"
                onLoadNext={onLoadNextPart}
            />
        </>
    );
});
