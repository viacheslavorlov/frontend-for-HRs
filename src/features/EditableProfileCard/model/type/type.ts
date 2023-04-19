import { ProfileType } from 'entities/Profile';
import { ValidateProfileError } from '../services/validateProfile/validateProfile';

export interface ProfileSchema {
    data?: ProfileType;
    form?: ProfileType;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
