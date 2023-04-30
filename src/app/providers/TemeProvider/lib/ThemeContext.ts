import { createContext } from 'react';
import { Theme } from 'app/providers/TemeProvider/const/themeConst';

export interface ThemeContextProps {
    theme?: Theme;
    // eslint-disable-next-line no-unused-vars
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
