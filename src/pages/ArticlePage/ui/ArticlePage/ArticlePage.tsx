import { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'wigets/Page/Page';
import { PageError } from 'wigets/PageError/PageError';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slice/articlesSlice';
import {
    getArticlePageError,

} from '../../model/selectors/articlePageSelectors';
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
