import { memo, useCallback } from 'react';
import { Theme } from '@/shared/const/theme/themeConst';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useThem';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightIcon from '../assets/theme-light 1.svg';
import DarkIcon from '../assets/theme-dark 1.svg';
import { saveJsonSettings } from '@/entities/User';
import { Icon } from '@/shared/ui/Icon';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AnyAction } from '@reduxjs/toolkit';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const dispatch = useAppDispatch();
	const onToggleTheme = useCallback(() => {
		dispatch(saveJsonSettings({ theme: toggleTheme() }) as AnyAction);
	}, [dispatch, toggleTheme]);
	
	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames('', {}, [className])}
			onClick={onToggleTheme}>
			{theme !== Theme.DARK
				? <Icon height={40} width={40} Svg={DarkIcon} />
				: <Icon height={40} width={40} Svg={LightIcon} />}
		</Button>
	);
});
