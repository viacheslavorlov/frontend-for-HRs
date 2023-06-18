import { CSSProperties, memo, useMemo } from 'react';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton/ui/Skeleton';
import { classNames, Mods } from '../../lib/classNames/classNames';
import { Icon } from '../Icon';
import AvatarPlaceholder from '../../assets/avatar.svg';
import cls from './Avatar.module.scss';

interface AvatarPrors {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarPrors) => {
    const { src, alt, className, size = 100 } = props;
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const errorFallback = <Icon width={size} height={size} Svg={AvatarPlaceholder} />;

    return (
        <AppImage
            loadingFallback={<Skeleton border="50%" width={size} height={size} />}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
});
