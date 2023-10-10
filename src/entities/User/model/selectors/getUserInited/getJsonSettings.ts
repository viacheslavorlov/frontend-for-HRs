import { Theme } from '@/shared/const/theme/themeConst';
import { buildSelector } from '@/shared/store';
import { JsonSettingsInterface } from '../../types/jsonSettings';

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) =>
        state.user?.authData?.jsonSettings || {
            theme: Theme.LIGHT,
            isFirstVisit: true,
            isFirstTimeArticlePageVisit: false,
        },
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state, key: keyof JsonSettingsInterface) => state.user?.authData?.jsonSettings?.[key],
);
