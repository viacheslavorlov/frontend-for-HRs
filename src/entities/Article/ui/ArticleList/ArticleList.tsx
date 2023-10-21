import { classNames } from '@/shared/lib/classNames/classNames';
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextVariant } from '@/shared/ui/Text';
import React, { ComponentType, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlePageFilters } from '../../../../widgets/ArticlePageFilters';
import { ArticleView } from '../../model/consts/articleConst';
import { Article } from '../../model/types/type';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    searchTools?: boolean;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
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
        searchTools,
        view = ArticleView.SMALL,
        isLoading,
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
                <Text
                    title={t('Статьи не найдены')}
                    variant={TextVariant.ERROR}
                    size={TextSize.L}
                />
            </div>
        );
    }

    if (isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {view === ArticleView.BIG ? (
                    <Skeleton width="100%" />
                ) : (
                    <HStack max gap="16">
                        <Skeleton width={240} height={256} />
                        <Skeleton width={240} height={256} />
                        <Skeleton width={240} height={256} />
                    </HStack>
                )}
            </div>
        );
    }
    if (view === ArticleView.BIG) {
        return (
            <Virtuoso
                data-testid="ArticleList"
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                style={{
                    height: '100%',
                }}
                data={articles}
                overscan={250}
                endReached={onLoadNext}
                scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 400,
                    exit: (velocity) => Math.abs(velocity) < 30,
                }}
                components={{
                    Header: ArticlePageFilters as ComponentType,
                    ScrollSeekPlaceholder: ScrollPlaceHolderBig,
                }}
                itemContent={(index, article) => renderArticle(article)}
            />
        );
    }

    return (
        <VirtuosoGrid
            data-testid="ArticleList"
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            style={{
                height: '100%',
            }}
            totalCount={articles.length}
            data={articles}
            listClassName={cls.itemContainer}
            endReached={onLoadNext}
            itemContent={(index, article) => renderArticle(article)}
            scrollSeekConfiguration={{
                enter: (velocity) => Math.abs(velocity) > 100,
                exit: (velocity) => Math.abs(velocity) < 30,
            }}
            components={{
                Header: searchTools ? (ArticlePageFilters as ComponentType) : undefined,
                ScrollSeekPlaceholder: ScrollPlaceHolderSmall,
                Footer: isLoading ? (LoadingSpinner as ComponentType) : undefined,
            }}
        />
    );
});
