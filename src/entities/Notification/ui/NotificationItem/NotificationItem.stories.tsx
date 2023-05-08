import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const LightNotificationItem = Template.bind({});
LightNotificationItem.args = {};

export const DarkNotificationItem = Template.bind({});
DarkNotificationItem.args = {};
DarkNotificationItem.decorators = [ThemeDecorator(Theme.DARK)];
