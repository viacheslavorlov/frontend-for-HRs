import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

export default {
    title: 'shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const LightArticleDetailsPageHeader = Template.bind({});
LightArticleDetailsPageHeader.args = {};

export const DarkArticleDetailsPageHeader = Template.bind({});
DarkArticleDetailsPageHeader.args = {};
DarkArticleDetailsPageHeader.decorators = [ThemeDecorator(Theme.DARK)];
