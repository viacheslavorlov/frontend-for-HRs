import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextVariant {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
}

type HeaderTagNum = 'h1' | 'h2' | 'h3';

const headerTag: Record<TextSize, HeaderTagNum> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = TextVariant.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods = {
        [cls[align]]: true,
        [cls[variant]]: true,
        [cls[size]]: true,
    };

    const HTag = headerTag[size];

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HTag className={cls.title}>{title}</HTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
