import { rtkApi } from '@/shared/api/rtkApi';
import { NotificationSchema } from '../model/type/NotificationShema';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotificationSchema[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
