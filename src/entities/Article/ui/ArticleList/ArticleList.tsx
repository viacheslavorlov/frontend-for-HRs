import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { Text, TextSize, TextVariant } from '@/shared/ui/Text/Text';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/articleConst';
import { Article } from '../../model/types/type';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    searchParams?: boolean;
    onLoadNext?: () => void;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        target,
        view = ArticleView.SMALL,
        isLoading,
        searchParams,
        onLoadNext,
    } = props;
    const { t } = useTranslation('article');

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.card}
            key={article.id}
            article={article}
            view={view}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} variant={TextVariant.ERROR} size={TextSize.L} />
            </div>
        );
    }

    const mods: Mods = {
        [cls.wrap]: searchParams,
    };

    if (view === ArticleView.BIG) {
        return (
            <Virtuoso
                className={classNames(cls.ArticleList, mods, [className, cls[view]])}
                style={{
                    height: 'calc(65vh - var(--navbar-heigt)',
                }}
                data={articles}
                overscan={250}
                endReached={onLoadNext}
                itemContent={(index, article) => renderArticle(article)}
            />
        );
    }
    return (
        <VirtuosoGrid
            className={classNames(cls.ArticleList, mods, [className, cls[view]])}
            style={{
                height: searchParams ? 'calc(65vh - var(--navbar-heigt)' : 'calc(55vh - var(--navbar-heigt)',
                overflowY: !searchParams ? 'hidden' : 'auto',
            }}
            totalCount={articles.length}
            data={articles}
            listClassName={cls.itemContainer}
            endReached={searchParams ? onLoadNext : undefined}
            itemContent={(index, article) => renderArticle(article)}
            // scrollSeekConfiguration={{
            //     enter: (velocity) => Math.abs(velocity) > 200,
            //     exit: (velocity) => Math.abs(velocity) < 30,
            //     change: (_, range) => console.log({ range }),
            // }}
        />
    );
});
