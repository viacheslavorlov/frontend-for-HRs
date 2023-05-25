import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import LoadingSpinner from './LoadingSpinner';

export default {
    title: 'shared/LoadingSpinner',
    component: LoadingSpinner,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = () => <LoadingSpinner />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
