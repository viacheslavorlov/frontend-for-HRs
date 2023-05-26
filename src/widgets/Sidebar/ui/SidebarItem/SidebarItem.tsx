import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../../model/types/sidebar';
import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLInkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

export interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    className?: string;
}

export const SidebarItem = memo(({ item, collapsed, className }: SidebarItemProps) => {
    const { t } = useTranslation('translation');
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            theme={AppLInkTheme.PRIMARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [className])}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
