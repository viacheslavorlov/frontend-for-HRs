import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    // eslint-disable-next-line no-unused-vars
    onChangeType: (tab: TabItem) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article');

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab);
        },
        [onChangeType],
    );

    const typeTabs = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ALL, content: t('Все') },
            { value: ArticleType.IT, content: t('IT') },
            { value: ArticleType.SCIENCE, content: t('Наука') },
            { value: ArticleType.ECONOMICS, content: t('Экономика') },
        ],
        [t],
    );

    return <Tabs tabs={typeTabs} value={value} className={classNames('', {}, [className])} onTabClick={onTabClick} />;
});
