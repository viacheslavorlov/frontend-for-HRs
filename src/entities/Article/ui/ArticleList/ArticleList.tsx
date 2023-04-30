import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    HTMLAttributeAnchorTarget, memo, UIEvent, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextVariant } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlePageFilters } from 'pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters';
import { useThrottle } from 'shared/lib/hooks/useTrottle/useTrottle';
import { scrollRestorationSliceActions } from 'features/ScrollRextoration';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/service/fetchNextArticlePage/fetchNextArticlePage';
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
    hasMore?: boolean;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        target,
        view = ArticleView.SMALL,
        isLoading,
        searchParams,
        hasMore,
    } = props;
    const dispatch = useAppDispatch();
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

    const Footer = <div style={{ height: 40 }} />;
    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestorationSliceActions.setScrollPosition({
            position: e.currentTarget.scrollTop, path: window.location.pathname,
        }));
    }, 700);

    const onLoadNextPart = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlePage());
        }
    }, [dispatch, hasMore]);

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
            <>
                {searchParams && <ArticlePageFilters />}
                <Virtuoso
                    className={classNames(cls.ArticleList, mods, [className, cls[view]])}
                    data={articles}
                    overscan={250}
                    endReached={onLoadNextPart}
                    itemContent={(index, article) => renderArticle(article)}

                />
            </>
        );
    }
    return (
        <>
            {searchParams && <ArticlePageFilters />}
            <VirtuosoGrid
                className={classNames(cls.ArticleList, mods, [className, cls[view]])}
                style={{
                    height: searchParams ? '100%' : 'calc(55vh - var(--navbar-heigt)',
                    overflowY: !searchParams ? 'hidden' : 'auto',
                }}
                totalCount={articles.length}
                data={articles}
                listClassName={cls.itemContainer}
                endReached={searchParams ? onLoadNextPart : undefined}
                itemContent={(index, article) => renderArticle(article)}
                // scrollSeekConfiguration={{
                //     enter: (velocity) => Math.abs(velocity) > 200,
                //     exit: (velocity) => Math.abs(velocity) < 30,
                //     change: (_, range) => console.log({ range }),
                // }}
            />
        </>
    );
});
