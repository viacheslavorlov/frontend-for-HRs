import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { ProfileType } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<ProfileType>('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
