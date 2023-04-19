import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { ArticleRecomendationList } from './ArticleRecomendationList';

export default {
    title: 'shared/ArticleRecomendationList',
    component: ArticleRecomendationList,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleRecomendationList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleRecomendationList> = (args) => <ArticleRecomendationList {...args} />;

export const LightArticleRecomendationList = Template.bind({});
LightArticleRecomendationList.args = {};

export const DarkArticleRecomendationList = Template.bind({});
DarkArticleRecomendationList.args = {};
DarkArticleRecomendationList.decorators = [ThemeDecorator(Theme.DARK)];
