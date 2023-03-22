import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from '../../types/comments';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation('article');
    const {
        className,
        comments,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={300} height={16} className={cls.comment} />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className, cls.loading])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.text || comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text text={t('Коментарии отсутствуют')} />}
        </div>
    );
});
