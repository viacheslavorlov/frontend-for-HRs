import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from '../../model/types/comments';

interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation('article');
    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={300} height={16} />
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={300} height={16} />
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={300} height={16} />
            </VStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard key={comment.text || comment.id} isLoading={isLoading} comment={comment} />
                ))
            ) : (
                <Text text={t('Коментарии отсутствуют')} />
            )}
        </VStack>
    );
});
