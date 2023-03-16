import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'widgets/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const LightArticleDetails = Template.bind({});
LightArticleDetails.args = {};
LightArticleDetails.decorators = [StoreDecorator({})];

export const DarkArticleDetails = Template.bind({});
DarkArticleDetails.args = {};
DarkArticleDetails.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
