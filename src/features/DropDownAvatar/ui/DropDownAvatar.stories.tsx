import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/TemeProvider';
import { DropDownAvatar } from './DropDownAvatar';

export default {
    title: 'entities/DropDownAvatar',
    component: DropDownAvatar,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof DropDownAvatar>;

const Template: ComponentStory<typeof DropDownAvatar> = (args) => <DropDownAvatar {...args} />;

export const LightDropDownAvatar = Template.bind({});
LightDropDownAvatar.args = {};
LightDropDownAvatar.decorators = [];

export const DarkDropDownAvatar = Template.bind({});
DarkDropDownAvatar.args = {};
DarkDropDownAvatar.decorators = [ThemeDecorator(Theme.DARK)];
