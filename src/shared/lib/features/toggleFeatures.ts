import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlags } from './setGetFeatures';

export interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ off, on, name }: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlags(name)) {
        return on();
    }
    return off();
}
