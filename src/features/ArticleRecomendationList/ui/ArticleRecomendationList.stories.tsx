import { Meta, StoryFn } from '@storybook/react';
import { Article } from '@/entities/Article';
import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ArticleRecomendationList } from './ArticleRecomendationList';

const article: Article = {
    id: '1',
    title: 'asdf asdfasdf',
    type: [],
    blocks: [],
    userId: '1',
    views: 123,
    img: '',
    createdAt: '',
    user: { id: '1', username: 'asdasdf' },
    subtitle: 'asdfasdfasdfasdfasdf',
};

export default {
    title: 'features/ArticleRecomendationList',
    component: ArticleRecomendationList,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8080/articles?_limit=4',
                method: 'GET',
                status: 200,
                response: [{ ...article }, { ...article, id: '2' }, { ...article, id: '3' }],
            },
        ],
    },
} as Meta<typeof ArticleRecomendationList>;

const Template: StoryFn<typeof ArticleRecomendationList> = (args) => <ArticleRecomendationList />;

export const LightArticleRecommendationList = Template.bind({});
LightArticleRecommendationList.args = {};
LightArticleRecommendationList.decorators = [StoreDecorator({})];

export const DarkArticleRecomendationList = Template.bind({});
DarkArticleRecomendationList.args = {};
DarkArticleRecomendationList.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
