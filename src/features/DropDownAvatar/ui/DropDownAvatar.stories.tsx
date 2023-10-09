import { UserRole } from '@/entities/User';
import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropDownAvatar } from './DropDownAvatar';

export default {
    title: 'features/DropDownAvatar',
    component: DropDownAvatar,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    roles: [UserRole.USER],
                    username: 'user',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxN-HcCY8vkC5AR8G8QJN6HFOklqleEMQc8KhBtZtnQ&s',
                },
            },
        }),
    ],
} as ComponentMeta<typeof DropDownAvatar>;

const Template: ComponentStory<typeof DropDownAvatar> = (args) => <DropDownAvatar {...args} />;

export const LightDropDownAvatarUser = Template.bind({});
LightDropDownAvatarUser.args = {};

export const LightDropDownAvatarAdmin = Template.bind({});
LightDropDownAvatarAdmin.args = {};
LightDropDownAvatarAdmin.decorators = [];

export const DarkDropDownAvatarUser = Template.bind({});
DarkDropDownAvatarUser.args = {};
DarkDropDownAvatarUser.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkDropDownAvatarManager = Template.bind({});
DarkDropDownAvatarManager.args = {};
DarkDropDownAvatarManager.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                roles: [UserRole.MANAGER],
                username: 'user',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxN-HcCY8vkC5AR8G8QJN6HFOklqleEMQc8KhBtZtnQ&s',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];
