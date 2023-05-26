import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const LightArticleSortSelector = Template.bind({});
LightArticleSortSelector.args = {};

export const DarkArticleSortSelector = Template.bind({});
DarkArticleSortSelector.args = {};
DarkArticleSortSelector.decorators = [ThemeDecorator(Theme.DARK)];
