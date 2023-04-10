import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <LoadingSpinner />
    </div>
));
