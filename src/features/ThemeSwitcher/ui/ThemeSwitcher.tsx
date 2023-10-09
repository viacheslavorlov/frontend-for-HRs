import { memo, useCallback } from 'react';
import { Theme } from '@/shared/const/theme/themeConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useThem';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightIcon from '../assets/theme-light 1.svg';
import DarkIcon from '../assets/theme-dark 1.svg';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();
    const onToggleTheme = useCallback(() => {
        dispatch(saveJsonSettings({ theme: toggleTheme() }));
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
