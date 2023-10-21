import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserIdQuery } from '../../api/userApi';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;
        
        const userId = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY));
        
        if (!userId) {
            return rejectWithValue('');
        }
        
        try {
            const response = await dispatch(
                getUserIdQuery(userId),
            ).unwrap();
            console.log(response);
            
            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error in initAuthData');
        }
    },
);
