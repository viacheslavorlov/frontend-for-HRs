import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettingsInterface } from './../model/types/jsonSettings';
import { User } from '../model/types/user';

interface SendUserDataArg {
    userId: string;
    jsonSettings: JsonSettingsInterface;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setUserSettings: build.mutation<User, SendUserDataArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserID: build.query<User, string>({
            query: (userId) => ({
                url: 'users/' + userId,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingsMutation = userApi.endpoints.setUserSettings.initiate;
export const getUserIdQuery = userApi.endpoints.getUserID.initiate;
