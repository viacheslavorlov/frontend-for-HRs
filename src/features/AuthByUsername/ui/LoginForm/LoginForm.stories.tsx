import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'widgets/LoginForm',
    component: LoginForm,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LightLoginForm = Template.bind({});
LightLoginForm.args = {
    placeholder: 'Логин',
    value: 123456789,
};

export const DarkLoginForm = Template.bind({});
DarkLoginForm.args = {
    placeholder: 'Логин',
    value: 123456789,
};
DarkLoginForm.decorators = [ThemeDecorator(Theme.DARK)];
