import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'widgets/LoginForm',
    component: LoginForm,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LightLoginForm = Template.bind({});
LightLoginForm.args = {};
LightLoginForm.decorators = [StoreDecorator(
    { loginForm: { username: '123', password: 'asdf' } },
)];

export const DarkLoginForm = Template.bind({});
DarkLoginForm.args = {};
DarkLoginForm.decorators = [StoreDecorator(
    { loginForm: { username: '123', password: 'asdf' } },
), ThemeDecorator(Theme.DARK)];

export const DarkLoginFormWithError = Template.bind({});
DarkLoginFormWithError.args = {};
DarkLoginFormWithError.decorators = [StoreDecorator(
    { loginForm: { username: '123', password: 'asdf', error: 'Error, error!!!' } },
), ThemeDecorator(Theme.DARK)];

export const DarkLoginFormWithLoading = Template.bind({});
DarkLoginFormWithLoading.args = {};
DarkLoginFormWithLoading.decorators = [StoreDecorator(
    { loginForm: { username: '123', password: 'asdf', isLoading: true } },
), ThemeDecorator(Theme.DARK)];
