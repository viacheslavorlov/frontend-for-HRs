import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../services/validateProfile/validateProfile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('with true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });

    test('with true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
