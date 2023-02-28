import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/styleDecorator/styleDecorator";
import {RouterDecorator} from "../../src/shared/config/routerDecorator/routerDecorator";
import {ThemeDecorator} from "../../src/shared/config/themeDecorator/themeDecorator";
import {Theme} from "../../src/app/providers/TemeProvider";

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
addDecorator(ThemeDecorator(Theme.LIGHT));
