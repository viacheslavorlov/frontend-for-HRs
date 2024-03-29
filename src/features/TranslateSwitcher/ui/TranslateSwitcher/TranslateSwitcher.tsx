import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './TranslateSwitcher.module.scss';

interface TranslateSwitcherProps {
    className?: string;
    short?: boolean;
}

export const TranslateSwitcher = memo(({ className, short }: TranslateSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggle}
            className={classNames(cls.TranslateSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {t(short ? 'короткий язык' : 'Русский')}
        </Button>
    );
});
