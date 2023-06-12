import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    'data-testid'?: string;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
        </main>
    );
});
