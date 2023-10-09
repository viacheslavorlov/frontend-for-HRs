import {USER_LOCAL_STORAGE_KEY} from '@/shared/const/localStorage/localStorage';
import axios from 'axios';

// @ts-ignore
const mode = __API_URL || import.meta.env.DEV;

export const $api = axios.create({
    baseURL: mode ? 'http://localhost:8000/' : 'https://backend-for-advanced-frontend.vercel.app/',
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
    },
});
