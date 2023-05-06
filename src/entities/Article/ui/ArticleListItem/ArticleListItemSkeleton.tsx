import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/articleConst';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view = ArticleView.SMALL,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton border="50%" width={30} height={30} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />

                    <Skeleton className={cls.img} height={200} />
                    <Skeleton className={cls.img} height={200} />
                    <div className={cls.footer}>
                        <Skeleton
                            height={36}
                            width={200}
                            className={cls.btn}
                        />

                        <Skeleton
                            height={36}
                            width={200}
                            className={cls.views}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                    <Skeleton className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={130} height={20} className={cls.title} />
            </Card>
        </div>
    );
});
