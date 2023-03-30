import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LightPage = Template.bind({});
LightPage.args = {};

export const DarkPage = Template.bind({});
DarkPage.args = {};
DarkPage.decorators = [ThemeDecorator(Theme.DARK)];
