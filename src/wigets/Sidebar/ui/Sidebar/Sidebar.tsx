import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'wigets/ThemeSwitcher';
import { TranslateSwitcher } from 'wigets/TranslateSwitcher/TranslateSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation('translation');
    const [collapsed, setCollapsed] = useState(false);
    const label = collapsed ? t('Развернуть') : t('Свернуть');
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <TranslateSwitcher className={cls.lang} />
            </div>

        </div>
    );
};
