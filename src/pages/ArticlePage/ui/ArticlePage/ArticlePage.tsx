import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    getArticlePageError,
    ArticleInfiniteList, initArticlesPage, articlePageReducer,

} from '@/widgets/ArticleInfiniteList';
import { Page } from '@/shared/ui/Page';
import { PageError } from '@/shared/ui/PageError/ui/PageError';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicLoaders/DynamicModuleLoader/DynamicModuleLoader';

import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlePage = memo(({ className }: ArticlePageProps) => {
    const dispatch = useAppDispatch();
    const error = useSelector(getArticlePageError);
    const [searchParams] = useSearchParams();

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
            <Page className={cls.ArticlePage}>
                <ArticleInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;
