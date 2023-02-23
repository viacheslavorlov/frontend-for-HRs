import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, InputHTMLAttributes, memo, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        type = 'text',
        className,
        onChange,
        placeholder,
        ...otherProps
    } = props;
    const { t } = useTranslation();
    const [isFocused, setIsFocused] = useState(false);
    const [carretPosition, setCarretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onSelect = (e: any) => {
        setCarretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <div className={cls.caretWrapper}>
                <input
                    {...otherProps}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                />
                {isFocused && (
                    <span
                        style={{ left: `${carretPosition * 9.6}px` }}
                        className={cls.caret}
                    />
                )}
            </div>

        </div>
    );
});
