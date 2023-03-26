import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LightArticleList = Template.bind({});
LightArticleList.args = {};
LightArticleList.decorators = [];

export const DarkArticleList = Template.bind({});
DarkArticleList.args = {};
DarkArticleList.decorators = [ThemeDecorator(Theme.DARK)];
