import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sortOrder';
import { ArticleSortField } from '../../model/consts/articleConst';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (order: SortOrder) => void;
    onChangeSort: (sort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        onChangeSort,
        sort,
        order,
        onChangeOrder,
    } = props;
    const { t } = useTranslation('article');

    const sortOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров'),
        },
    ], [t]);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newSort: string) => {
        onChangeOrder(newSort as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<SortOrder>
                className={cls.select}
                label={t('Сортировать по')}
                options={sortOptions}
                value={order}
                onChange={changeOrderHandler}
            />
            <Select<ArticleSortField>
                className={cls.select}
                label={t('по')}
                options={sortFieldOptions}
                value={sort}
                onChange={changeSortHandler}
            />
        </div>
    );
});
