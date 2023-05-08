import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Avatar } from './Avatar';

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
    src: 'https://cdn-icons-png.flaticon.com/512/924/924956.png',
    alt: 'alt',
    size: 100,
};

export const DarkAvatar = Template.bind({});
DarkAvatar.args = {
    src: 'https://cdn-icons-png.flaticon.com/512/924/924956.png',
    alt: 'alt',
    size: 100,
};
DarkAvatar.decorators = [ThemeDecorator(Theme.DARK)];
