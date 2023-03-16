import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ArticlesImageBlockComponent } from './ArticlesImageBlockComponent';

export default {
    title: 'widgets/ArticlesImageBlockComponent',
    component: ArticlesImageBlockComponent,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ArticlesImageBlockComponent>;

const Template: ComponentStory<typeof ArticlesImageBlockComponent> = (args) => <ArticlesImageBlockComponent {...args} />;

export const LightArticlesImageBlockComponent = Template.bind({});
LightArticlesImageBlockComponent.args = {};
LightArticlesImageBlockComponent.decorators = [StoreDecorator({})];

export const DarkArticlesImageBlockComponent = Template.bind({});
DarkArticlesImageBlockComponent.args = {};
DarkArticlesImageBlockComponent.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
