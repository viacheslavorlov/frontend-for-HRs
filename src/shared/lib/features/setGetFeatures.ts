import {FeatureFlags} from '@/shared/types/featureFlags';

// не изменяется в ходе сессии пользователя
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureflags: FeatureFlags | undefined) {
    if (newFeatureflags) {
        featureFlags = newFeatureflags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}
