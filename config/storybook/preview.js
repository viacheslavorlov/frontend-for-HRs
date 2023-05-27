import {addDecorator} from "@storybook/react";
import {StyleDecorator} from '../../src/shared/config/styleDecorator/styleDecorator';
import {RouterDecorator} from '../../src/shared/config/routerDecorator/routerDecorator';
import {ThemeDecorator} from '../../src/shared/config/themeDecorator/themeDecorator';
import {Theme} from '../../src/shared/const/theme/themeConst';
import {SuspenseDecorator} from '../../src/shared/config/SuspenseDecorator/SuspenseDecorator';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'app_light_theme', class: Theme.LIGHT, color: '#ffe1d5' },
            { name: 'app_dark_theme', class: Theme.DARK, color: '#202124' },
            { name: 'app_orange_theme', class: Theme.ORANGE, color: '#e38400' }
        ],
    },
    layout: 'fullscreen'
}

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
// addDecorator(MemoryRouterDecorator)
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
