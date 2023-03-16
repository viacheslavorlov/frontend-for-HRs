import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticlesTextBlockComponent } from './ArticlesTextBlockComponent';

export default {
    title: 'widgets/ArticlesTextBlockComponent',
    component: ArticlesTextBlockComponent,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticlesTextBlockComponent>;

const Template: ComponentStory<typeof ArticlesTextBlockComponent> = (args) => <ArticlesTextBlockComponent {...args} />;

export const LightArticlesTextBlockComponent = Template.bind({});
LightArticlesTextBlockComponent.args = {};
LightArticlesTextBlockComponent.decorators = [StoreDecorator({})];

export const DarkArticlesTextBlockComponent = Template.bind({});
DarkArticlesTextBlockComponent.args = {};
DarkArticlesTextBlockComponent.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
