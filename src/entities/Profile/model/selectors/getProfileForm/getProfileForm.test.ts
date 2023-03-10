import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('with normal form in state', () => {
        const result = {
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
                form: result,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(result);
    });

    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
