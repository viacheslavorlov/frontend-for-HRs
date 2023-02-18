import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'wigets/ThemeSwitcher';
import { TranslateSwitcher } from 'wigets/TranslateSwitcher/TranslateSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'app/router/routeConfig/routes';
import cls from './Sidebar.module.scss';
import AboutIcon from '../../assets/about-icon.svg';
import HomeIcon from '../../assets/home.svg';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation('translation');
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <div className={cls.item}>
                    <AppLink
                        to={RoutePaths.main}
                        theme={AppLInkTheme.PRIMARY}
                    >
                        <HomeIcon className={cls.icon} />
                        <span className={cls.link}>{t('Главная')}</span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink
                        to={RoutePaths.about}
                        theme={AppLInkTheme.PRIMARY}
                    >
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>{t('О нас!')}</span>
                    </AppLink>
                </div>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.XL}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <TranslateSwitcher short={collapsed} className={cls.lang} />
            </div>

        </div>
    );
};
