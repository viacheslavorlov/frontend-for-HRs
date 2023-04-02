import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const LightArticleTypeTabs = Template.bind({});
LightArticleTypeTabs.args = {};

export const DarkArticleTypeTabs = Template.bind({});
DarkArticleTypeTabs.args = {};
DarkArticleTypeTabs.decorators = [ThemeDecorator(Theme.DARK)];
