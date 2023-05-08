import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'shared/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const LightArticleEditPage = Template.bind({});
LightArticleEditPage.args = {};

export const DarkArticleEditPage = Template.bind({});
DarkArticleEditPage.args = {};
DarkArticleEditPage.decorators = [ThemeDecorator(Theme.DARK)];
