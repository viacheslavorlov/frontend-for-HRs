import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Link } from 'react-router-dom';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'app/router/routeConfig/routes';
import cls from './CommentCard.module.scss';
import { CommentType } from '../../types/comments';

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
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={20}
                    />
                </div>
                <Skeleton
                    width="100%"
                    height={50}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePaths.profile}${comment?.user.id}`}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text text={comment?.text} className={cls.text} />
        </div>
    );
});
