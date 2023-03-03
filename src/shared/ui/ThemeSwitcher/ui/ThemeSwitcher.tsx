import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/TemeProvider';
import LightIcon from 'shared/ui/ThemeSwitcher/assets/theme-light 1.svg';
import DarkIcon from 'shared/ui/ThemeSwitcher/assets/theme-dark 1.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';

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
