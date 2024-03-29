import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const LightInput = Template.bind({});
LightInput.args = {
    placeholder: 'Логин',
    value: '123456789',
};

export const DarkInput = Template.bind({});
DarkInput.args = {
    placeholder: 'Логин',
    value: '123456789',
};
DarkInput.decorators = [ThemeDecorator(Theme.DARK)];
