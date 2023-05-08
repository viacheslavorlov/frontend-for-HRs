import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';
import Copie from '../../assets/copie.svg';

interface CodeProps {
    className?: string;
    children: string;
}

export const Code = ({ className, children }: CodeProps) => {
    const onCopie = useCallback(() => {
        navigator.clipboard.writeText(children);
    }, [children]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopie}>
                <Icon Svg={Copie} className={cls.copyIcon} />
            </Button>
            <code>
                {children}
            </code>
        </pre>
    );
};
