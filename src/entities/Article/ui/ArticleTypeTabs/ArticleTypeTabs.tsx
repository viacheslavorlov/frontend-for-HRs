import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';
import cls from './ArticleTypeTabs.module.scss';
import {useTranslation} from 'react-i18next';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChange: () =>
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('article');

    const typeTabs = useMemo<TabItem[]>(() => [
        { value: ArticleType.ALL, content: t('Все') },
        { value: ArticleType.IT, content: t('IT') },
        { value: ArticleType.SCIENCE, content: t('Наука') },
        { value: ArticleType.ECONOMICS, content: t('Экономика') },
    ], [t]);

    return (
        <Tabs
            tabs={typeTabs}
            className={classNames(cls.ArticleTypeTabs, {}, [className])}
            onTabClick={}
        />
    );
});
