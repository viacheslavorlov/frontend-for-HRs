import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const LightCurrencySelect = Template.bind({});
LightCurrencySelect.args = {};

export const DarkCurrencySelect = Template.bind({});
DarkCurrencySelect.args = {};
DarkCurrencySelect.decorators = [ThemeDecorator(Theme.DARK)];
