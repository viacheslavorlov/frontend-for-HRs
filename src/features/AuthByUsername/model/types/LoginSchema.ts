import { FeatureFlags } from '@/shared/types/featureFlags';

export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
    features?: FeatureFlags;
}
