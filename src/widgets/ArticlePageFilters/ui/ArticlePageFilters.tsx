import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import { SortOrder } from '@/shared/types/sortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/Tabs';

import { HStack, VStack } from '@/shared/ui/Stack';
import { fetchArticlesList } from '../../ArticleInfiniteList/model/service/fetchArticles/fetchArticles';
import {
    getArticlePageOrder,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
    getArticlePageView,
} from '../../ArticleInfiniteList/model/selectors/articlePageSelectors';
import { ArticleViewSelector } from '@/features/ArticlevVewSelector';
import { articlePageActions } from '../../ArticleInfiniteList/model/slice/articlesSlice';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlePageView);
    const sort = useSelector(getArticlePageSort);
    const order = useSelector(getArticlePageOrder);
    const search = useSelector(getArticlePageSearch);
    const type = useSelector(getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 600);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(sort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlePageActions.setOrder(order));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debounceFetchData();
        },
        [debounceFetchData, dispatch],
    );

    const onChangeType = useCallback(
        (tab: TabItem) => {
            dispatch(articlePageActions.setType(tab.value as ArticleType));
            dispatch(articlePageActions.setPage(1));
            debounceFetchData();
        },
        [debounceFetchData, dispatch],
    );

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <HStack gap="16" max justify="between">
                <ArticleSortSelector
                    order={order}
                    onChangeOrder={onChangeOrder}
                    sort={sort}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </HStack>
            <Card>
                <Input value={search} placeholder={t('Поиск')} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs onChangeType={onChangeType} value={type} />
        </VStack>
    );
});
