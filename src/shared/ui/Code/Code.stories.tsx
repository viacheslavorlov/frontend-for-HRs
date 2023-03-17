import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { Code } from './Code';

export default {
    title: 'widgets/Code',
    component: Code,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const LightCode = Template.bind({});
LightCode.args = {};
LightCode.decorators = [StoreDecorator({})];

export const DarkCode = Template.bind({});
DarkCode.args = {};
DarkCode.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
