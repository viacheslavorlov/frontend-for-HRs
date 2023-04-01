import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comments';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'entities/Comments/model/services/fetchComments/fetchComments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePaths } from 'app/router/routeConfig/routes';
import { Page } from 'wigets/Page/Page';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetaildPage/CommentsEntitie/selectors/comments';
import {
    articleCommentReducer, getArticleComments,
} from 'pages/ArticleDetaildPage/CommentsEntitie/slice/articleDetaildCommentSlice';
import { addCommentsForArticle } from './CommentsEntitie/services/addCommentsForArticle/addCommentsForArticle';
import { NotFoundPage } from '../ui/NotFoundPage';
import cls from './ArticleDetailedPage.module.scss';

interface ArticleDetaildPageProps {
    className?: string
}

const ArticleDetailedPage = ({ className }: ArticleDetaildPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const navigate = useNavigate();
    const location = useLocation();
    const onBackToList = useCallback(() => {
        navigate(RoutePaths.articles);
    }, [navigate]);

    console.log('location', location.pathname);

    useInitialEffect(() => {
        if (id != null) {
            dispatch(fetchCommentsByArticleId(id));
        }
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

    const reducers: ReducersList = {
        articleDetailedComment: articleCommentReducer,
    };

    return (

        <Page className={classNames(cls.ArticleDetaildPage, {}, [className])}>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onBackToList} className={cls.backButton}>
                    {t('Назад к списку статей...')}
                </Button>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </DynamicModuleLoader>
        </Page>

    );
};

export default memo(ArticleDetailedPage);
