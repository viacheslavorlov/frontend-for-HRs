import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import cls from './Checkbox.module.scss';

type HTMLCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface CheckboxProps<T> extends HTMLCheckboxProps {
    value: T;
    onChange?: (value: T) => void;
    unCheck?: (value: T) => void;
}

export const Checkbox = <T extends string>(props: CheckboxProps<T>) => {
    const { value, unCheck, onChange, ...otherProps } = props;
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked && onChange) {
            onChange(e.target.value as T);
        }
        if (!e.target.checked && unCheck) {
            unCheck(e.target.value as T);
        }
    };
    return (
        <input
            type="checkbox"
            onChange={onChangeHandle}
            value={value}
            className={cls.Checkbox}
            {...otherProps}
        />
    );
};
