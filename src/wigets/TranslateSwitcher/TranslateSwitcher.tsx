import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './TranslateSwitcher.module.scss';

interface TranslateSwitcherProps {
    className?: string
}

export const TranslateSwitcher = ({ className }: TranslateSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggle}
            className={classNames(cls.TranslateSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t('Русский')}
        </Button>
    );
};
