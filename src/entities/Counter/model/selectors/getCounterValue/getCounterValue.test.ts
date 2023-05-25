import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 42 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(42);
    });
});
