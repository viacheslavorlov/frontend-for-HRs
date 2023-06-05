import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValueSelector } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 42 },
        };
        expect(getCounterValueSelector(state as StateSchema)).toEqual(42);
    });
});
