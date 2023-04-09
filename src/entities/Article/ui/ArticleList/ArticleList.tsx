import { classNames } from 'shared/lib/classNames/classNames';
import {
    ComponentType, HTMLAttributeAnchorTarget, memo, MutableRefObject, UIEvent, useCallback, useRef,
} from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { Text, TextSize, TextVariant } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlePageFilters } from 'pages/ArticlePage/ui/ArticlePageFilters/ArticlePageFilters';
import { useThrottle } from 'shared/lib/hooks/useTrottle/useTrottle';
import { scrollRestorationSliceActions } from 'features/ScrollRextoration';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlePageHasMore } from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { fetchNextArticlePage } from 'pages/ArticlePage/model/service/fetchNextArticlePage/fetchNextArticlePage';
import { Article, ArticleView } from '../../model/types/type';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

// interface ScrollPlaceholderProps {
//     height: number;
//     width: number;
//     index: number;
//     view: ArticleView;
// }
//
// const ScrollPlaceholder = ({
//     height, width, index, view,
// }: ScrollPlaceholderProps) => (
//     <div className={cls.itemContainer}>
//         <ArticleListItemSkeleton view={view} />
//     </div>
// );

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        target,
        view = ArticleView.BIG,
        isLoading,
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
    const hasMore = useSelector(getArticlePageHasMore);
    const onLoadNextPart = useCallback(() => {
        if (hasMore) {
            dispatch(fetchNextArticlePage());
        }
    }, [dispatch, hasMore]);
    //
    // const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BIG ? 14 : 3)
    //     .fill(0)
    //     // eslint-disable-next-line react/no-array-index-key
    //     .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} variant={TextVariant.ERROR} size={TextSize.L} />
            </div>
        );
    }

    if (view === ArticleView.BIG) {
        return (
            <Virtuoso
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                style={{ height: '100%' }}
                data={articles}
                endReached={onLoadNextPart}
                itemContent={(index, article) => renderArticle(article)}
                components={{
                    Header: ArticlePageFilters as ComponentType,
                }}
            />
        );
    }
    return (
        <VirtuosoGrid
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            style={{ height: '100%' }}
            totalCount={articles.length}
            overscan={450}
            data={articles}
            listClassName={cls.itemContainer}
            endReached={onLoadNextPart}
            components={{
                Header: ArticlePageFilters as ComponentType,
                // ScrollSeekPlaceholder: ScrollPlaceholder,
            }}
            itemContent={(index, article) => renderArticle(article)}
            // scrollSeekConfiguration={{
            //     enter: (velocity) => Math.abs(velocity) > 200,
            //     exit: (velocity) => Math.abs(velocity) < 30,
            //     change: (_, range) => console.log({ range }),
            // }}
        />
    );
});
