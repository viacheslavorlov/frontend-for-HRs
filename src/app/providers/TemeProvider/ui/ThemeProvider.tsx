import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const { theme } = useJsonSettings();
    const [newTheme, setNewTheme] = useState<Theme>(theme || initialTheme);
    const [isThemeInited, setThemeInithed] = useState(false)
    console.log(newTheme);

    useEffect(() => {
        if(!isThemeInited) {
            setNewTheme(initialTheme)
            setThemeInithed(true)
        }
        if (theme) {
            setNewTheme(theme)
        }
    }, [initialTheme, isThemeInited, theme])

    const defaultProps = useMemo(
        () => ({
            theme: newTheme,
            setTheme: setNewTheme,
        }),
        [newTheme],
    );
    document.body.className = newTheme;

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
