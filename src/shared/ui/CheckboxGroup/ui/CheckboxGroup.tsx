import { useCallback, useEffect, useState } from 'react';
import { HStack } from '../../Stack';

export interface OptionsCheckbox<T extends string> {
    label: string;
    value: T;
}

interface CheckboxGroupProps<T extends string> {
    options: OptionsCheckbox<T>[];
    onChange?: (values: T[]) => void;
}

export const CheckboxGroup = <T extends string>({ options, onChange }: CheckboxGroupProps<T>) => {
    const [checkedValues, setCheckedValues] = useState<boolean[]>(
        new Array(options.length).fill(false),
    );

    const handleCheckboxChange = useCallback(
        (index: number) => {
            const newCheckedValues = [...checkedValues];
            newCheckedValues[index] = !newCheckedValues[index];
            setCheckedValues(newCheckedValues);
        },
        [checkedValues],
    );

    const optionsResult = useCallback(
        () => options.map((option) => option.value).filter((_, i) => checkedValues[i]),
        [checkedValues, options],
    );

    useEffect(() => {
        if (onChange) {
            onChange(optionsResult());
        }
    }, [checkedValues, onChange, optionsResult]);

    return (
        <HStack gap="16">
            {options.map((option, index) => (
                <div key={option.label}>
                    <label htmlFor={option.label}>{option.label}</label>
                    <input
                        id={option.label}
                        type="checkbox"
                        value={option.value}
                        checked={checkedValues[index]}
                        onChange={() => handleCheckboxChange(index)}
                    />
                </div>
            ))}
        </HStack>
    );
};
