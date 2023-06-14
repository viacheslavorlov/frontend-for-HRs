import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const LightSelect = Template.bind({});
LightSelect.args = {
    label: 'укажите значение',
};

export const DarkSelect = Template.bind({});
DarkSelect.args = {
    label: 'укажите значение',
    options: [
        { value: '123', content: 'первый пункт' },
        { value: '12345', content: 'второй пункт' },
    ],
    value: '12345',
};
DarkSelect.decorators = [ThemeDecorator(Theme.DARK)];
