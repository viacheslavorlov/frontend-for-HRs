import { ArticlePageGreetings } from '@/features/ArticlePageGreetings';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/shared/ui/Page';
import { PageError } from '@/shared/ui/PageError/ui/PageError';
import {
    ArticleInfiniteList,
    articlePageReducer,
    getArticlePageError,
    initArticlesPage,
} from '@/widgets/ArticleInfiniteList';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import cls from './ArticlePage.module.scss';
import { ArticlePageFilters } from '@/widgets/ArticlePageFilters';
import { AnyAction } from '@reduxjs/toolkit';

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = () => {
    const dispatch = useAppDispatch();
    const error = useSelector(getArticlePageError);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams) as AnyAction);
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
            <Page data-testid="ArticlePage" className={cls.ArticlePage}>
                <ArticlePageFilters />
                <ArticleInfiniteList />
                <ArticlePageGreetings />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlePage;
