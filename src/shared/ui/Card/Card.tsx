import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardVariant {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = CardVariant.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
