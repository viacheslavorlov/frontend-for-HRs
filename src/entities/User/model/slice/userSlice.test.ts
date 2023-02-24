import { UserSchema } from 'entities/User';

describe('userSlice.test', () => {
    test('user state exists', () => {
        const state: UserSchema = {
            authData: {
                id: 'e123423',
                username: 'asdfasd',
            },
        };
        expect(state).toEqual({
            authData: {
                id: 'e123423',
                username: 'asdfasd',
            },
        });
    });
});
