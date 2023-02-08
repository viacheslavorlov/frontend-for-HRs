import { createContext } from 'react';

export enum Theme {
    // eslint-disable-next-line no-unused-vars
    LIGHT = 'light',
    // eslint-disable-next-line no-unused-vars
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme;
    // eslint-disable-next-line no-unused-vars
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
