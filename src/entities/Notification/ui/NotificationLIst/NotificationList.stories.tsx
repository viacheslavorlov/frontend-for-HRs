import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const LightNotification = Template.bind({});
LightNotification.args = {};

export const DarkNotification = Template.bind({});
DarkNotification.args = {};
DarkNotification.decorators = [ThemeDecorator(Theme.DARK)];
