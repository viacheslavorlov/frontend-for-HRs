import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

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
