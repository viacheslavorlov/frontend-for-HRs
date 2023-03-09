import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from 'entities/Profile';
import { validateProfile, ValidateProfileError } from 'entities/Profile/model/services/validateProfile/validateProfile';
import { ProfileType } from '../../types/profile';

export const updateProfile = createAsyncThunk<ProfileType, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const formData = getProfileForm(getState());
        const errors = validateProfile(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.post<ProfileType>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
