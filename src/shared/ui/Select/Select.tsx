import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectPrors {
    className?: string;
}

export const Select = memo((props: SelectPrors) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Select, {}, [className])}>
            <select>
                <option value="">1</option>
            </select>
        </div>
    );
});
