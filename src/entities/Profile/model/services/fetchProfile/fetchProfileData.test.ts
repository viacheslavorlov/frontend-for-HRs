import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk/testAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileType } from 'entities/Profile';
import { fetchProfileData } from './fetchProfile';

jest.mock('axios');

describe('fetchProfile test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('normal data received', async () => {
        const userdata: ProfileType = {
            first: 'John',
            last: 'Doe',
            age: 42,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
            username: 'Username',
            city: 'Kuala Lumpur',
            currency: Currency.RUB,
            country: Country.Kazakhstan,
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: userdata }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userdata);
    });

    test('error data fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
