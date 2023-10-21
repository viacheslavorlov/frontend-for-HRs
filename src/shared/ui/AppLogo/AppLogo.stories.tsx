import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLogo } from './AppLogo';

export default {
    title: 'shared/AppLogo',
    component: AppLogo,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => <AppLogo {...args} />;

export const LightAppLogo = Template.bind({});
LightAppLogo.args = {};

export const DarkAppLogo = Template.bind({});
DarkAppLogo.args = {};
DarkAppLogo.decorators = [ThemeDecorator(Theme.DARK)];
