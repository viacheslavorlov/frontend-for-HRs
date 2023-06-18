/* eslint-disable no-unused-vars */
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk/testAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileType } from '@/entities/Profile';
import { ValidateProfileError } from '../validateProfile/validateProfile';
import { updateProfile } from './updateProfile';

jest.mock('axios');

describe('updateProfile test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
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
    test('normal data update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            profile: {
                form: userdata,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: userdata }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userdata);
    });

    test('server error data update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            profile: {
                form: userdata,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('Validate profile data error during profile update', async () => {
        const thunk = new TestAsyncThunk(updateProfile, {
            profile: {
                form: { ...userdata, last: '' },
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
