import { UserSchema } from '../types/user';

describe('userSlice.test', () => {
    test('user state exists', () => {
        const state: UserSchema = {
            authData: {
                id: 'e123423',
                username: 'asdfasd',
            },
            _inited: true,
        };
        expect(state).toEqual({
            authData: {
                id: 'e123423',
                username: 'asdfasd',
            },
            _inited: true,
        });
    });
});
