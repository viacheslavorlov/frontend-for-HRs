import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

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
