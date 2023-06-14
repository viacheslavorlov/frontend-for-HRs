import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const LightArticleTypeTabs = Template.bind({});
LightArticleTypeTabs.args = { value: ArticleType.ECONOMICS };

export const DarkArticleTypeTabs = Template.bind({});
DarkArticleTypeTabs.args = { value: ArticleType.ALL };
DarkArticleTypeTabs.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeArticleTypeTabs = Template.bind({});
OrangeArticleTypeTabs.args = { value: ArticleType.IT };
OrangeArticleTypeTabs.decorators = [ThemeDecorator(Theme.ORANGE)];
