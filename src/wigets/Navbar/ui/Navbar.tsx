import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLInkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "wigets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classNames(cls.links)}>

                <AppLink to={'/'} theme={AppLInkTheme.SECONDARY} className={classNames(cls.mainLink)}>MainPage</AppLink>
                <AppLink to={'/about'} theme={AppLInkTheme.SECONDARY}>AboutPage</AppLink>
            </div>
        </div>
    );
};

