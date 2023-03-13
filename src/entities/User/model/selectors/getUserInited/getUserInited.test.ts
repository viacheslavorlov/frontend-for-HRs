import { getUserInited } from 'entities/User';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getUserInited.test', () => {
    test('with true state', () => {
        const mockState: DeepPartial<StateSchema> = {
            user: {
                _inited: true,
            },
        };
        expect(getUserInited(mockState as StateSchema)).toEqual(true);
    });

    test('with false state', () => {
        const mockState: DeepPartial<StateSchema> = {
            user: {
                _inited: false,
            },
        };
        expect(getUserInited(mockState as StateSchema)).toEqual(false);
    });

    test('with no state', () => {
        const mockState: DeepPartial<StateSchema> = {};
        expect(getUserInited(mockState as StateSchema)).toEqual(undefined);
    });
});
