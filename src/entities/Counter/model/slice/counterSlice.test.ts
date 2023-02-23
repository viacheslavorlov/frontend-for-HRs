import { counterActions, counterReducer, CounterSchema } from 'entities/Counter';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 43 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 42 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 41 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 42 });
    });
});
