import { StateSchema } from '@/app/providers/StoreProvider';

export const getCounterValueSelector = (state: StateSchema) => state.counter.value;
