import { ReactElement } from 'react';
import { FeatureFlags } from '../../../types/featureFlags';
import { getFeatureFlags } from '../setGetFeatures';

interface ToggleFeatureProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement | null;
}

export const ToggleFeature = (props: ToggleFeatureProps) => {
    const { off, on, feature } = props;

    if (getFeatureFlags(feature)) {
        return on;
    }

    return off;
};
