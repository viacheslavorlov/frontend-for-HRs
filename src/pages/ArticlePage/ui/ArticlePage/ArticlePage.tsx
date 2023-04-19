import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleList, ArticleView } from 'entities/Article';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'wigets/Page/Page';
import { PageError } from 'wigets/PageError/PageError';
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage';
import { articlePageReducer, getArticles } from '../../model/slice/articlesSlice';
import {
    getArticlePageError,
    getArticlePageHasMore,
    getArticlePageLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = memo(({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView) || ArticleView.SMALL;
    const [searchParams] = useSearchParams();
    const hasMore = useSelector(getArticlePageHasMore);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Page>
                <PageError />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                    searchParams
                    hasMore={hasMore}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;
