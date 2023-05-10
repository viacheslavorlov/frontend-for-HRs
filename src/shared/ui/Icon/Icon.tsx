import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    size?: number
}

export const Icon = memo((props: IconProps) => {
    const {
        size = 25, className, Svg, inverted, ...oterProps
    } = props;
    return (
        <Svg
            height={`${size}px`}
            width={`${size}px`}
            {...oterProps}
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
        />
    );
});
