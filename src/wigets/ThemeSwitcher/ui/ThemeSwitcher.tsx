import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {useTheme} from "app/providers/TemeProvider";
import LightIcon from "wigets/ThemeSwitcher/assets/theme-light 1.svg";
import DarkIcon from "wigets/ThemeSwitcher/assets/theme-dark 1.svg";
import {Theme} from "app/providers/TemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};

