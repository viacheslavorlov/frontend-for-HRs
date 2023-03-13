import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import ArticleDetailedPage from './ArticleDetailedPage';

export default {
    title: 'widgets/ArticleDetailedPage',
    component: ArticleDetailedPage,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleDetailedPage>;

const Template: ComponentStory<typeof ArticleDetailedPage> = (args) => <ArticleDetailedPage {...args} />;

export const LightArticleDetaildPage = Template.bind({});
LightArticleDetaildPage.args = {};
LightArticleDetaildPage.decorators = [StoreDecorator({})];

export const DarkArticleDetaildPage = Template.bind({});
DarkArticleDetaildPage.args = {};
DarkArticleDetaildPage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
