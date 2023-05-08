import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/TemeProvider';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';

export default {
    title: 'entities/NotificationButton',
    component: NotificationButton,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const LightNotificationButton = Template.bind({});
LightNotificationButton.args = {};
LightNotificationButton.decorators = [StoreDecorator({})];

export const DarkNotificationButton = Template.bind({});
DarkNotificationButton.args = {};
DarkNotificationButton.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
