import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettingsInterface } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

export const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(action.payload.id));
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettingsInterface>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
            state.authData = payload;
            setFeatureFlags(payload.features)
            state._inited = true;
        });

        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
    },
});
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
