import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextVariant {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
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
type FontWeight = 'thin' | 'normal' | 'bold';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    fontWeight?: FontWeight;
    'data-testid'?: string;
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
        fontWeight = 'normal',
        'data-testid': dataTestId = 'Text',
    } = props;

    const mods = {
        [cls[align]]: true,
        [cls[variant]]: true,
        [cls[size]]: true,
    };

    const HTag = headerTag[size];

    return (
        <div
            data-testid={dataTestId}
            className={classNames(cls.Text, mods, [className, cls[fontWeight]])}
        >
            {title && (
                <HTag data-testid={`${dataTestId}.Header`} className={cls.title}>
                    {title}
                </HTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
