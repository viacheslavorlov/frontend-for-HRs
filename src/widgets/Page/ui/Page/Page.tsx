import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
        </main>
    );
});
