import { counterActions, counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/counterSchema';

export {
    counterReducer,
    counterActions,
    CounterSchema,
    Counter,
};
