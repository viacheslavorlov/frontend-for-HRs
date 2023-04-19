import { ProfileType } from 'entities/Profile';

export enum ValidateProfileError {
    // eslint-disable-next-line no-unused-vars
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    // eslint-disable-next-line no-unused-vars
    INCORRECT_AGE = 'INCORRECT_AGE',
    // eslint-disable-next-line no-unused-vars
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    // eslint-disable-next-line no-unused-vars
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    // eslint-disable-next-line no-unused-vars
    INCORRECT_CITY = 'INCORRECT_CITY',
    // eslint-disable-next-line no-unused-vars
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    // eslint-disable-next-line no-unused-vars
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    // eslint-disable-next-line no-unused-vars
    NO_DATA = 'NO_DATA',
    // eslint-disable-next-line no-unused-vars
    SERVER_ERROR = 'SERVER_ERROR'
}

export const validateProfile = (profile?: ProfileType): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        age,
        first,
        last,
        country,
        currency,
        city,
        username,
        avatar,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !last) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    if (!username || username.length < 3) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }
    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }
    return errors;
};
