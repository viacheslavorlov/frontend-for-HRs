import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const LightNotificationItem = Template.bind({});
LightNotificationItem.args = {
    item: {
        title: 'ItemTitle',
        id: '123',
        description: 'item description',
    },
};
export const LightNotificationItemWithHref = Template.bind({});
LightNotificationItemWithHref.args = {
    item: {
        title: 'ItemTitle',
        id: '123',
        description: 'item description',
        href: 'www.google.com',
    },
};

export const DarkNotificationItem = Template.bind({});
DarkNotificationItem.args = {
    item: {
        title: 'ItemTitle',
        id: '123',
        description: 'item description',
    },
};
DarkNotificationItem.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkNotificationItemWithHref = Template.bind({});
DarkNotificationItemWithHref.args = {
    item: {
        title: 'ItemTitle',
        id: '123',
        description: 'item description',
        href: 'www.google.com',
    },
};
DarkNotificationItemWithHref.decorators = [ThemeDecorator(Theme.DARK)];
