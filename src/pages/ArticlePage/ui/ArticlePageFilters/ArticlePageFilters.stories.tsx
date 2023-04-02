import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticleSortField } from 'entities/Article';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'entities/Article/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const LightArticlePageFilters = Template.bind({});
LightArticlePageFilters.args = {};
LightArticlePageFilters.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    articlesPage: {
        order: 'desc',
        search: 'test',
        sort: ArticleSortField.VIEWS,
    },
})];

export const DarkArticlePageFilters = Template.bind({});
DarkArticlePageFilters.args = {};
DarkArticlePageFilters.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPage: {
        order: 'desc',
        search: 'test',
        sort: ArticleSortField.VIEWS,
    },
})];
