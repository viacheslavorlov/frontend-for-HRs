import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Sidebar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {};
DarkNoAuth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: {} })];
