import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={classNames(cls.links)}>

                <AppLink
                    to="/"
                    theme={AppLInkTheme.PRIMARY}
                    className={classNames(cls.mainLink)}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLInkTheme.PRIMARY}
                >
                    {t('О нас!')}
                </AppLink>
            </div>
        </div>
    );
};
