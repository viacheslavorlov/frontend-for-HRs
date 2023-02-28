import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { AppLink, AppLInkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backGroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'AppLink', theme: AppLInkTheme.PRIMARY };

export const Secondary = Template.bind({});
Secondary.args = { children: 'AppLink', theme: AppLInkTheme.SECONDARY };

export const Red = Template.bind({});
Red.args = { children: 'AppLink', theme: AppLInkTheme.RED };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { children: 'AppLink', theme: AppLInkTheme.PRIMARY };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = { children: 'AppLink', theme: AppLInkTheme.SECONDARY };
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const RedDark = Template.bind({});
RedDark.args = { children: 'AppLink', theme: AppLInkTheme.RED };
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
