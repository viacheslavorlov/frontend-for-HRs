import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [StoreDecorator({
        api: {
            queries: {
                'getNotifications(null)': {
                    // @ts-ignore
                    status: 'fulfilled',
                    endpointName: 'getNotifications',
                    requestId: 'OV4tO_BBMurYtiA0kvfvF',
                    originalArgs: null,
                    startedTimeStamp: 1683926970485,
                    data: [
                        {
                            id: '1',
                            title: 'Notification 1',
                            description: 'Some action happened 1',
                            userId: '1',
                            href: '/profile/1',
                        },
                        {
                            id: '2',
                            title: 'Notification 2',
                            description: 'Some action happened 2',
                            userId: '2',
                            href: 'http://localhost:3000/articles',
                        },
                        {
                            id: '3',
                            title: 'Notification 3',
                            description: 'Some action happened 3',
                            userId: '1',
                            href: 'http://localhost:3000/admin',
                        },
                        {
                            id: '4',
                            title: 'Notification 4',
                            description: 'Some action happened 4',
                            userId: '1',
                            href: 'http://localhost:3000/profile/1',
                        },
                        {
                            id: '5',
                            title: 'Notification 5',
                            description: 'Some action happened 5',
                            userId: '1',
                            href: 'http://localhost:3000/articles',
                        },
                        {
                            id: '6',
                            title: 'Notification 6',
                            description: 'Some action happened 6',
                            userId: '1',
                            href: 'http://localhost:3000/admin',
                        },
                    ],
                    fulfilledTimeStamp: 1683926971428,
                },
            },
        },
    })],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const LightNotification = Template.bind({});
LightNotification.args = {};

export const LightNotificationLoading = Template.bind({});
LightNotificationLoading.args = {};
LightNotificationLoading.decorators = [StoreDecorator({
    api: {
        queries: {
            'getNotifications(null)': {
                // @ts-ignore
                status: 'pending',
            },
        },
    },
})];

export const DarkNotification = Template.bind({});
DarkNotification.args = {};
DarkNotification.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkNotificationLoading = Template.bind({});
DarkNotificationLoading.args = {};
DarkNotificationLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        api: {
            queries: {
                'getNotifications(null)': {
                    // @ts-ignore
                    status: 'pending',
                },
            },
        },
    })];
