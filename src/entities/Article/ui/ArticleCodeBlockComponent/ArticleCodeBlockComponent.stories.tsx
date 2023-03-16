import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'widgets/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const LightArticleCodeBlockComponent = Template.bind({});
LightArticleCodeBlockComponent.args = {};
LightArticleCodeBlockComponent.decorators = [StoreDecorator({})];

export const DarkArticleCodeBlockComponent = Template.bind({});
DarkArticleCodeBlockComponent.args = {};
DarkArticleCodeBlockComponent.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
