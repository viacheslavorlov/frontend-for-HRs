import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from 'pages/ui/NotFoundPage';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comments';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader';
import {
    articleCommentReducer,
    getArticleComments,
} from 'pages/ui/ArticleDetaildPage/CommentsEntitie/slice/articleDetaildCommentSlice';
import { getArticleCommentsIsLoading } from 'pages/ui/ArticleDetaildPage/CommentsEntitie/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'entities/Comments/model/services/fetchComments/fetchComments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import {
    addCommentsForArticle,
} from 'pages/ui/ArticleDetaildPage/CommentsEntitie/services/addCommentsForArticle/addCommentsForArticle';
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
            <NotFoundPage />
        );
    }

    const reducers: ReducersList = {
        articleDetailedComment: articleCommentReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetaildPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
