import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ArticleBlockForm } from './ArticleBlockForm';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/ArticleBlockForm',
    component: ArticleBlockForm,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleBlockForm>;

const Template: ComponentStory<typeof ArticleBlockForm> = (args) => <ArticleBlockForm {...args} />;

export const LightArticleBlockForm = Template.bind({});
LightArticleBlockForm.args = {};
LightArticleBlockForm.decorators = [];

export const DarkArticleBlockForm = Template.bind({});
DarkArticleBlockForm.args = {};
DarkArticleBlockForm.decorators = [ThemeDecorator(Theme.DARK)];
