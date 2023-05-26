import { memo } from 'react';
import { Theme } from '@/shared/const/theme/themeConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useThem';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightIcon from '../assets/theme-light 1.svg';
import DarkIcon from '../assets/theme-dark 1.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
