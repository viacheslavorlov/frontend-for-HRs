import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleList, ArticleView } from 'entities/Article';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'wigets/Page/Page';
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage';
import { articlePageReducer, getArticles } from '../../model/slice/articlesSlice';
import {
    getArticlePageError,
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
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageLoading);
    const error = useSelector(getArticlePageError);
    const view = useSelector(getArticlePageView) || ArticleView.SMALL;
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    // const onLoadNextPart = useCallback(() => {
    //     if (hasMore) {
    //         dispatch(fetchNextArticlePage());
    //     }
    // }, [dispatch, hasMore]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                {/* <ArticlePageFilters className={cls.viewSelector} /> */}
                <ArticleList
                    isLoading={isLoading}
                    articles={articles}
                    view={view}
                    searchParams
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;
