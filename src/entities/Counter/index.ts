import { counterActions, counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { Counter } from 'entities/Counter/ui/Counter';
import { CounterSchema } from 'entities/Counter/model/types/counterSchema';

export {
    counterReducer,
    counterActions,
    CounterSchema,
    Counter,
};
