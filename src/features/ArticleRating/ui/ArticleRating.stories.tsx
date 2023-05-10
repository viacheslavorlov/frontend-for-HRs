import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import ArticleRating from './ArticleRating';

export default {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const LightArticleRating = Template.bind({});
LightArticleRating.args = {};

export const DarkArticleRating = Template.bind({});
DarkArticleRating.args = {};
DarkArticleRating.decorators = [ThemeDecorator(Theme.DARK)];
