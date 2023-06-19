import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/store';

export const [useCounterValue, getCounterValue] = buildSelector(
    (state: StateSchema) => state.counter.value,
);
