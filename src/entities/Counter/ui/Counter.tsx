import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="increment" onClick={increment}>{t('increment')}</button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="value">
                {t('value')}
                {' '}
                {counterValue}
            </h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="decrement" onClick={decrement}>{t('decrement')}</button>
        </div>
    );
};
