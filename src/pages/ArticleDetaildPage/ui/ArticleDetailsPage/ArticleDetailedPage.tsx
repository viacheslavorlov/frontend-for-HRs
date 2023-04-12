import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comments';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'entities/Comments/model/services/fetchComments/fetchComments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'wigets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slice/articleDetaildCommentSlice';
import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecomendation';
import { getArticleDetailsRecommendationIsLoading } from '../../model/selectors/recomendations';
import { fetchRecommendations } from '../../model/services/fetchRecommendations/fetchRecommendations';
import { addCommentsForArticle } from '../../model/services/addCommentsForArticle/addCommentsForArticle';
import { NotFoundPage } from '../../../NotFoundPage';
import cls from './ArticleDetailedPage.module.scss';

interface ArticleDetaildPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailedPage: articleDetailsPageReducer,
};

const ArticleDetailedPage = ({ className }: ArticleDetaildPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationIsLoading);

    useInitialEffect(() => {
        if (id != null) {
            dispatch(fetchCommentsByArticleId(id));
        }
        dispatch(fetchRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentsForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetaildPage, {}, [className])}>
                <NotFoundPage />
            </Page>
        );
    }

    return (

        <Page className={classNames(cls.ArticleDetaildPage, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text title={t('Рекомендации')} />
                    <ArticleList
                        target="_blank"
                        articles={recommendations}
                        view={ArticleView.SMALL}
                        className={cls.recommendations}
                        searchParams={false}
                    />
                    <Text title={t('Комментарии')} />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        isLoading={commentIsLoading}
                        comments={comments}
                    />
                </VStack>
            </DynamicModuleLoader>
        </Page>

    );
};

export default memo(ArticleDetailedPage);
