import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileData } from '../../selectors/getProfileData/getProfileFirstname';
import { ProfileType } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const formData = getProfileData(getState());
        try {
            const response = await extra.api.post<ProfileType>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
