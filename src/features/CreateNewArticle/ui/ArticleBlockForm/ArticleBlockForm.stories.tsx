import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockForm } from './ArticleBlockForm';

export default {
    title: 'entities/ArticleBlockForm',
    component: ArticleBlockForm,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [StoreDecorator({}),ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof ArticleBlockForm>;

const Template: ComponentStory<typeof ArticleBlockForm> = (args) => <ArticleBlockForm {...args} />;

export const LightArticleBlockForm = Template.bind({});
LightArticleBlockForm.args = {};
LightArticleBlockForm.decorators = [];

export const DarkArticleBlockForm = Template.bind({});
DarkArticleBlockForm.args = {};
DarkArticleBlockForm.decorators = [ThemeDecorator(Theme.DARK)];
