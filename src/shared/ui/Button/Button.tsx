import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    // eslint-disable-next-line no-unused-vars
    CLASSIC = 'classic'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;

    return (
        <button
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};
