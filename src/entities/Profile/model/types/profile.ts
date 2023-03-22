import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/country';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfile/validateProfile';

export interface ProfileType {
    id?: string;
    first?: string;
    last?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: ProfileType;
    form?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
