import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/type';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.BIG,
        isLoading,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
        />
    );

    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 14 : 3)
        .fill(0)
    // eslint-disable-next-line react/no-array-index-key
        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map((item) => renderArticle(item))
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
