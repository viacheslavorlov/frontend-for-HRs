import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof CurrencySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const LightCurrencySelect = Template.bind({});
LightCurrencySelect.args = {};

export const DarkCurrencySelect = Template.bind({});
DarkCurrencySelect.args = {};
DarkCurrencySelect.decorators = [ThemeDecorator(Theme.DARK)];
