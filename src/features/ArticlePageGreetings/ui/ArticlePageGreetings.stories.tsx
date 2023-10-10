import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlePageGreetings } from './ArticlePageGreetings';

export default {
    title: 'shared/ArticlePageGreetings',
    component: ArticlePageGreetings,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
} as ComponentMeta<typeof ArticlePageGreetings>;

const Template: ComponentStory<typeof ArticlePageGreetings> = (args) => (
    <ArticlePageGreetings {...args} />
);

export const LightArticlePageGreetings = Template.bind({});
LightArticlePageGreetings.args = {};

export const DarkArticlePageGreetings = Template.bind({});
DarkArticlePageGreetings.args = {};
DarkArticlePageGreetings.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeArticlePageGreetings = Template.bind({});
OrangeArticlePageGreetings.args = {};
OrangeArticlePageGreetings.decorators = [ThemeDecorator(Theme.ORANGE)];
