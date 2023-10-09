import {USER_LOCAL_STORAGE_KEY} from '@/shared/const/localStorage/localStorage';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// @ts-ignore
const mode = __API_URL || import.meta.env.DEV;
// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: mode
            ? 'http://localhost:8000'
            : 'https://backend-for-advanced-frontend.vercel.app',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
