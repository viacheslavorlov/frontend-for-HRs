import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarPrors {
    className?: string;
    url?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarPrors) => {
    const {
        url, alt, className, size,
    } = props;
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img
            src={url}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
});
