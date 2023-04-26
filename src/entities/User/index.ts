export { isUserAdmin, isUserManager, getUserRole } from 'entities/User/model/selectors/getUserRole/getUserRole';
export { userActions, userReducer } from './model/slice/userSLice';
export { UserSchema, User } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
