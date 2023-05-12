import {addDecorator} from "@storybook/react";
import {StyleDecorator} from '@/shared/config/styleDecorator/styleDecorator';
import {RouterDecorator} from '@/shared/config/routerDecorator/routerDecorator';
import {ThemeDecorator} from '@/shared/config/themeDecorator/themeDecorator';
import {Theme} from '@/app/providers/TemeProvider';
import {SuspenseDecorator} from '@/shared/config/SuspenseDecorator/SuspenseDecorator';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
// addDecorator(MemoryRouterDecorator)
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
