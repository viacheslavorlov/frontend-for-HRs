import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage/localStorage';

export const $api = axios.create({
    baseURL: __API_URL,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
    },
});
