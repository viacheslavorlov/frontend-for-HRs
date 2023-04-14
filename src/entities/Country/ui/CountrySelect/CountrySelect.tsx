import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];
export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const {
        readonly,
        className,
        onChange,
        value,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            label="Страна"
            disabled={readonly}
            onChange={onChangeHandler}
            defaultValue="Укажите страну"
            value={value}
            items={options}
            className={classNames('', {}, [className])}
        />
    );

    // return (
    //     <Select
    //
    //         label={t('Укажите страну')}
    //         disabled={readonly}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //     />
    //
    // );
});
