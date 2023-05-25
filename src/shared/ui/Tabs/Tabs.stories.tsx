import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const LightTabs = Template.bind({});
LightTabs.args = {
    tabs: [
        { value: 'tab1', content: 'tab1' },
        { value: 'tab2', content: 'tab2' },
        { value: 'tab3', content: 'tab3' },
        { value: 'tab4', content: 'tab4' },

    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
};

export const DarkTabs = Template.bind({});
DarkTabs.args = {
    tabs: [
        { value: 'tab1', content: 'tab1' },
        { value: 'tab2', content: 'tab2' },
        { value: 'tab3', content: 'tab3' },
        { value: 'tab4', content: 'tab4' },

    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
DarkTabs.decorators = [ThemeDecorator(Theme.DARK)];
