import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button onClick={increment}>increment</button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>{`value = ${counterValue}`}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button onClick={decrement}>decrement</button>
        </div>
    );
};
