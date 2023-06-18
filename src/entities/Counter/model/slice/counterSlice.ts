import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/store';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 10,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        addFive: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});
export const { actions: counterActions, reducer: counterReducer, useActions: useCounterActions } = counterSlice;
