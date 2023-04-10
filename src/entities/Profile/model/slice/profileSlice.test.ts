import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../services/validateProfile/validateProfile';
import { updateProfile } from '../services/updateProfile/updateProfile';
import { ProfileSchema } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const data: ProfileSchema = {
    data: {
        first: 'John',
        last: 'Doe',
        age: 42,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
        username: 'Username',
        city: 'Kuala Lumpur',
        currency: Currency.RUB,
        country: Country.Kazakhstan,
    },
    form: {
        first: 'Jane',
        last: 'Doe',
        age: 33,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
        username: 'Username',
        city: 'Kuala Lumpur',
        currency: Currency.RUB,
        country: Country.Kazakhstan,
    },
    validateErrors: [],
    readonly: false,
    error: undefined,
    isLoading: false,
};

describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = data;
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ ...state, readonly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = data;
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                ...state,
                readonly: true,
                form: data.data,
                validateErrors: undefined,
            });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = data;
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            first: 'Jesus',
            last: 'Christ',
            age: 33,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
            username: 'Username',
            city: 'Kuala Lumpur',
            currency: Currency.RUB,
            country: Country.Kazakhstan,
        })))
            .toEqual({
                ...state,
                form: {
                    ...state.form,
                    first: 'Jesus',
                    last: 'Christ',
                    age: 33,
                },
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(state as ProfileSchema, updateProfile.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
        expect(profileReducer(state as ProfileSchema, updateProfile.fulfilled(data.form!, '')))
            .toEqual({
                readonly: true,
                isLoading: false,
                validateErrors: undefined,
                data: data.form,
                form: data.form,
            });
    });

    test('test update profile service Error (rejected)', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true, validateErrors: undefined, error: 'error' };
        expect(profileReducer(state as ProfileSchema, updateProfile.rejected({ message: 'error', name: '' }, 'error arg')))
            .toEqual({
                isLoading: false,
                error: 'error',
            });
    });
});
