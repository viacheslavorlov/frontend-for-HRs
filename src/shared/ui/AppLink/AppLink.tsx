import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLInkTheme {
    PRIMARI = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    theme?: AppLInkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const {to, className, children, theme = AppLInkTheme.PRIMARI, ...otherProps} = props
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

