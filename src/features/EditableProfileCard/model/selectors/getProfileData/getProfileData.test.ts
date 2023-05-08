import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData test', () => {
    test('with normal state', () => {
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
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
