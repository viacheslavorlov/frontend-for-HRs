import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleList, ArticleView } from 'entities/Article';
import { Page } from 'wigets/Page/Page';
import { ArticlePageFilters } from 'pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../model/service/initArticlesPage/initArticlesPage';
import { fetchNextArticlePage } from '../model/service/fetchNextArticlePage/fetchNextArticlePage';
import { articlePageReducer, getArticles } from '../model/slice/articlesSlice';
import {
    getArticlePageError,
    getArticlePageHasMore,
    getArticlePageLoading,
    getArticlePageNum,
    getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = memo(({ className }: ArticlePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView) || ArticleView.SMALL;
    const hasMore = useSelector(getArticlePageHasMore);
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const onLoadNextPart = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlePage());
        }
    }, [dispatch, hasMore]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticlePageFilters className={cls.viewSelector} />
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;
