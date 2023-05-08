import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePaths } from '@/shared/config/routeConfig/routes';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { CommentType } from '../../model/types/comments';

interface CommentCardPrors {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardPrors) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (!comment) {
        return null;
    }

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className])}>
                <VStack max gap="8">
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={20}
                    />
                </VStack>
                <Skeleton
                    width="100%"
                    height={50}
                />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePaths.profile}${comment?.user.id}`}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text text={comment?.text} />
        </VStack>
    );
});
