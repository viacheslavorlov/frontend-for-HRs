import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleViewSelector } from 'pages/ui/ArticlePage/ui/ArticleViewSelector/ArticleViewSelector';
import { ArticleList, ArticleView } from 'entities/Article';
import { Page } from 'shared/Page/Page';
import { fetchNextArticlePage } from 'pages/ui/ArticlePage/model/service/fetchNextArticlePage/fetchNextArticlePage';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlesSlice';
import { fetchArticlesList } from '../model/service/fetchArticles/fetchArticles';
import {
    getArticlePageError, getArticlePageHasMore, getArticlePageLoading, getArticlePageNum, getArticlePageView,
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
    const page = useSelector(getArticlePageNum);
    const hasMore = useSelector(getArticlePageHasMore);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector onViewClick={onChangeView} className={cls.viewSelector} view={view} />
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
