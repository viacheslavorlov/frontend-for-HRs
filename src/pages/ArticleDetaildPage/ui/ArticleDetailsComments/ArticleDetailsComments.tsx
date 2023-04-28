import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comments';
import { VStack } from 'shared/ui/Stack';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'entities/Comments/model/services/fetchComments/fetchComments';
import { useTranslation } from 'react-i18next';
import { getArticleComments } from '../../model/slice/articleDetaildCommentSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
    addCommentsForArticle,
} from '../../model/services/addCommentsForArticle/addCommentsForArticle';
import { fetchRecommendations } from '../../model/services/fetchRecommendations/fetchRecommendations';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {
        className, id,
    } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchRecommendations());
    });

    const comments = useSelector(getArticleComments.selectAll);
    const commentIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentsForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text title={t('Комментарии')} />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
