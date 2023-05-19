import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { Text, TextSize, TextVariant } from '@/shared/ui/Text/Text';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/articleConst';
import { Article } from '../../model/types/type';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    searchParams?: boolean;
    onLoadNext?: () => void;
}

const ScrollPlaceHolderBig = () => (
    <VStack className={cls.card} gap="16">
        <Skeleton border="50%" width={50} height={50} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
    </VStack>
);

const ScrollPlaceHolderSmall = () => (
    <div className={cls.card}>
        <Skeleton border="50%" width={50} height={50} />
        <Skeleton width={240} height={246} border="6px" />
    </div>
);

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

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Skeleton width="100%" />
            </div>
        );
    }
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
                scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 400,
                    exit: (velocity) => Math.abs(velocity) < 30,
                }}
                components={{
                    ScrollSeekPlaceholder: ScrollPlaceHolderBig,
                }}
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
            scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 100,
                exit: (velocity) => Math.abs(velocity) < 30,
            }}
            components={{
                ScrollSeekPlaceholder: ScrollPlaceHolderSmall,
            }}
        />
    );
});
