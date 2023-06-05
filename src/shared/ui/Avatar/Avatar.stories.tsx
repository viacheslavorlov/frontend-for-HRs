import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Avatar } from './Avatar';
import AvatarPlaceHolder from './placeholder.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const LightAvatar = Template.bind({});
LightAvatar.args = {
    src: AvatarPlaceHolder,
    alt: 'alt',
    size: 100,
};

export const DarkAvatar = Template.bind({});
DarkAvatar.args = {
    src: AvatarPlaceHolder,
    alt: 'alt',
    size: 100,
};
DarkAvatar.decorators = [ThemeDecorator(Theme.DARK)];
