import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useCounterValue } from '../model/selectors/getCounter/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = memo(() => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement, addFive } = useCounterActions();

    const onIncrement = () => {
        increment();
    };
    const onDecrement = () => {
        decrement();
    };
    const onAddFive = (num: number) => {
        addFive(num);
    };
    return (
        <div>
            <button data-testid="increment" onClick={onIncrement}>
                {t('increment')}
            </button>
            <h1 data-testid="value">
                {t('value')} {counterValue}
            </h1>
            <button data-testid="decrement" onClick={onDecrement}>
                {t('decrement')}
            </button>
            <button onClick={() => onAddFive(5)}>{t('+5')}</button>
        </div>
    );
});
