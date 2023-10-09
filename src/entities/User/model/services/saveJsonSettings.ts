import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/getUserInited/getJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';
import { JsonSettingsInterface } from '../types/jsonSettings';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveJsonSettings = createAsyncThunk<
    JsonSettingsInterface,
    JsonSettingsInterface,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { dispatch, rejectWithValue, getState } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData || !userData.id) {
        return rejectWithValue('No userData found!');
    }
    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('No jsonSettings on server!');
        }

        return response.jsonSettings;
    } catch (e) {
        console.log(e);
        return rejectWithValue('No userData found!');
    }
});
