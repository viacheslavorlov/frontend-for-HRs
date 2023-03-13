import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import ArticlePage from './ArticlePage';

export default {
    title: 'widgets/ArticlePage',
    component: ArticlePage,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />;

export const LightArticlePage = Template.bind({});
LightArticlePage.args = {};
LightArticlePage.decorators = [StoreDecorator({})];

export const DarkArticlePage = Template.bind({});
DarkArticlePage.args = {};
DarkArticlePage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
