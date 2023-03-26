import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/type';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article?.title}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article?.img} alt={article?.title} />
                    <Text text={article?.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text text={article?.type.join(', ')} className={cls.type} />
                    <Text text={String(article?.views)} className={cls.views} />
                    <Text title={article?.title} className={cls.title} />
                </div>
            </div>
        </div>
    );
});
