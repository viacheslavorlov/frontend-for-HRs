import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'features/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof ArticleDetailsComments>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const LightArticleDetailsComments = Template.bind({});
LightArticleDetailsComments.args = {};

export const DarkArticleDetailsComments = Template.bind({});
DarkArticleDetailsComments.args = {};
DarkArticleDetailsComments.decorators = [ThemeDecorator(Theme.DARK)];
