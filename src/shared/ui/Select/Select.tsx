import {
    ChangeEvent, memo, useMemo,
} from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    disabled?: boolean
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        disabled,
    } = props;

    const optionList = useMemo(() => options?.map((option) => (
        <option
            key={option.value}
            className={cls.option}
            value={option.value}
        >
            {option.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const mods = {
        [cls.readonly]: disabled,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={disabled}
                className={cls.select}
                onChange={onChangeHandler}
                value={value}
            >
                {optionList}
            </select>
        </div>
    );
});
