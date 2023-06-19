import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticlevViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const LightArticlevVewSelectorBIG = Template.bind({});
LightArticlevVewSelectorBIG.args = { view: ArticleView.BIG };

export const DarkArticlevVewSelectorBIG = Template.bind({});
DarkArticlevVewSelectorBIG.args = { view: ArticleView.BIG };
DarkArticlevVewSelectorBIG.decorators = [ThemeDecorator(Theme.DARK)];

export const LightArticlevVewSelectorSmall = Template.bind({});
LightArticlevVewSelectorSmall.args = { view: ArticleView.SMALL };

export const DarkArticlevVewSelectorSmall = Template.bind({});
DarkArticlevVewSelectorSmall.args = { view: ArticleView.SMALL };
DarkArticlevVewSelectorSmall.decorators = [ThemeDecorator(Theme.DARK)];
