import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLInkTheme {
    // eslint-disable-next-line no-unused-vars
    PRIMARY = 'primary',
    // eslint-disable-next-line no-unused-vars
    SECONDARY = 'secondary',
    // eslint-disable-next-line no-unused-vars
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    theme?: AppLInkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const {
        to, className, children, theme = AppLInkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </Link>
    );
};
