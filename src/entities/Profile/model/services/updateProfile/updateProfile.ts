import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from 'entities/Profile';
import { getProfileData } from '../../selectors/getProfileData/getProfileFirstname';
import { ProfileType } from '../../types/profile';

export const updateProfile = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const formData = getProfileForm(getState());
        try {
            const response = await extra.api.post<ProfileType>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
