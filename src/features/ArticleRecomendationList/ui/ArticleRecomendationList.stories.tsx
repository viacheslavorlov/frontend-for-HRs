import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleRecomendationList } from './ArticleRecomendationList';

const article: Article = {
    id: '1',
    title: 'asdf asdfasdf',
    type: [],
    blocks: [],
    views: 123,
    img: '',
    createdAt: '',
    user: { id: '1', username: 'asdasdf' },
    subtitle: 'asdfasdfasdfasdfasdf',
};

export default {
    title: 'shared/ArticleRecomendationList',
    component: ArticleRecomendationList,
    argTypes: {
        background: { control: 'background' },
    },
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8080/articles?_limit=4',
                method: 'GET',
                status: 200,
                response: [
                    { ...article },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ArticleRecomendationList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleRecomendationList> = (args) => <ArticleRecomendationList {...args} />;

export const LightArticleRecommendationList = Template.bind({});
LightArticleRecommendationList.args = {};
LightArticleRecommendationList.decorators = [StoreDecorator({})];

export const DarkArticleRecomendationList = Template.bind({});
DarkArticleRecomendationList.args = {};
DarkArticleRecomendationList.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
