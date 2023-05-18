import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        background: { control: 'background' },
    },

    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    mockData: [
        {
            url: 'http://localhost:8000/article-rating?userId=1',
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 5,
                },
            ],
        },
    ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const LightArticleRating = Template.bind({});
LightArticleRating.args = { articleId: '2' };

export const DarkArticleRating = Template.bind({});
DarkArticleRating.args = { articleId: '1' };
DarkArticleRating.decorators = [ThemeDecorator(Theme.DARK)];
