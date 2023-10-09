import { buildSelector } from '@/shared/store';
import { JsonSettingsInterface } from '../../types/jsonSettings';
import { Theme } from '@/shared/const/theme/themeConst';

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) =>
        state.user?.authData?.jsonSettings || {
            theme: Theme.LIGHT,
            isFirstVisit: true,
            settingsPageHasBeenOpen: false,
        },
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state, key: keyof JsonSettingsInterface) => state.user?.authData?.jsonSettings?.[key],
);
