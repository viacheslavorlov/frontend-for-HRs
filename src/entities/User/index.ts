export { UserRole } from './model/consts/userConst';
export { isUserAdmin, isUserManager, getUserRole } from './model/selectors/getUserRole/getUserRole';
export { userActions, userReducer } from './model/slice/userSLice';
export type { UserSchema, User } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    getJsonSettings,
    getJsonSettingsByKey,
    useJsonSettings,
    useJsonSettingsByKey,
} from './model/selectors/getUserInited/getJsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { initAuthData } from './model/services/initAuthData';
