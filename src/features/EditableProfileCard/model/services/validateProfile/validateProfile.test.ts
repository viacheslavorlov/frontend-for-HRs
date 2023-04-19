import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfile, ValidateProfileError } from './validateProfile';

const data = {
    first: 'John',
    last: 'Doe',
    age: 42,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
    username: 'Username',
    city: 'Kuala Lumpur',
    currency: Currency.RUB,
    country: Country.Kazakhstan,
};
describe('validateProfile.test', () => {
    test('valid data', () => {
        expect(validateProfile(data)).toEqual([]);
    });

    test('invalid: no first name', () => {
        expect(validateProfile({ ...data, first: '' })).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('invalid: no last name', () => {
        expect(validateProfile({ ...data, last: '' })).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('invalid: no age', () => {
        expect(validateProfile({ ...data, age: undefined })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('invalid: no avatar', () => {
        expect(validateProfile({ ...data, avatar: '' })).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });

    test('invalid: no username', () => {
        expect(validateProfile({ ...data, username: '' })).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('invalid: no City', () => {
        expect(validateProfile({ ...data, city: '' })).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('invalid: no Country', () => {
        expect(validateProfile({ ...data, country: undefined })).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('invalid: no currency', () => {
        expect(validateProfile({ ...data, currency: undefined })).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
    });

    test('invalid: no data', () => {
        expect(validateProfile({})).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CURRENCY,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AVATAR,
        ]);
    });
});
