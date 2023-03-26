import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const LightArticleListItem = Template.bind({});
LightArticleListItem.args = {};
LightArticleListItem.decorators = [];

export const DarkArticleListItem = Template.bind({});
DarkArticleListItem.args = {};
DarkArticleListItem.decorators = [ThemeDecorator(Theme.DARK)];
