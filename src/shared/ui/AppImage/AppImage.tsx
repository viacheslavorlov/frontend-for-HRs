import {
    ImgHTMLAttributes, memo, ReactElement, useEffect, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className: string;
    loadingFallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        loadingFallback,
        errorFallback,
        alt = 'image',
        src,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        };
    }, [src]);
    //
    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isError && errorFallback && !isLoading) {
        return errorFallback;
    }
    if (isLoading && loadingFallback) {
        return loadingFallback;
    }

    return (
        <img alt={alt} src={src} className={className} {...otherProps} />
    );
});
