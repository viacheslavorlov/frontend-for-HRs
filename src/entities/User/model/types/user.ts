import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/userConst';
import { JsonSettingsInterface } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettingsInterface;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
