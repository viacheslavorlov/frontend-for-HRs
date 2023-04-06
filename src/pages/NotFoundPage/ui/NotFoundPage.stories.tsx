import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
