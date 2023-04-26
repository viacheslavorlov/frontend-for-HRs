export enum UserRole {
    // eslint-disable-next-line no-unused-vars
    ADMIN = 'ADMIN',
    // eslint-disable-next-line no-unused-vars
    USER = 'USER',
    // eslint-disable-next-line no-unused-vars
    MANAGER = 'MANAGER'
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
