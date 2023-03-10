import { createContext } from 'react';

export enum Theme {
    // eslint-disable-next-line no-unused-vars
    LIGHT = 'app_light_theme',
    // eslint-disable-next-line no-unused-vars
    DARK = 'app_dark_theme',

    ORANGE = 'app_orange_theme'
}

export interface ThemeContextProps {
    theme?: Theme;
    // eslint-disable-next-line no-unused-vars
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
