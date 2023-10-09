import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                    roles: [UserRole.USER],
                    avatar: '',
                    features: {},
                },
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const LightArticleEditPage = Template.bind({});
LightArticleEditPage.args = {};

export const DarkArticleEditPage = Template.bind({});
DarkArticleEditPage.args = {};
DarkArticleEditPage.decorators = [ThemeDecorator(Theme.DARK)];
