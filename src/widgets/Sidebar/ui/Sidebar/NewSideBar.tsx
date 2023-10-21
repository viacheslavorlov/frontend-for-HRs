import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { TranslateSwitcher } from '@/features/TranslateSwitcher';
import { SIDEBAR_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLogo } from '@/shared/ui/AppLogo/AppLogo';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './NewSidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const NewSidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(
        JSON.parse(localStorage.getItem(SIDEBAR_LOCAL_STORAGE_KEY) || 'false'),
    );
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        localStorage.setItem(SIDEBAR_LOCAL_STORAGE_KEY, String(!collapsed));
        setCollapsed((prevState) => !prevState);
    };
    const itemList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    className={cls.item}
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [sidebarItemsList, collapsed],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <AppLogo className={cls.AppLogo} />
            <VStack
                role="navigation"
                gap="8"
                align={collapsed ? 'center' : 'start'}
                className={cls.items}>
                {itemList}
            </VStack>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <TranslateSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
