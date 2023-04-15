import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation('profile');
    const {
        readonly,
        className,
        onChange,
        value,
    } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            label={t('Валюта')}
            onChange={onChangeHandler}
            items={options}
            disabled={readonly}
            defaultValue="Укажите валюту"
            value={value}
            className={classNames('', {}, [className])}
        />
    );
    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите валюту')}
    //         disabled={readonly}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //     />
    //
    // );
});
