import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const LightListBox = Template.bind({});
LightListBox.args = {
    value: '1111',
    disabled: false,
    label: 'label',
    items: [
        { value: '1111', disabled: false, content: '1111' },
        { value: '2222', disabled: false, content: '2222' },
        { value: '3333', disabled: false, content: '3333' },
    ],
    onChange: (value: string) => {},
    defaultValue: 'укажите',
};

export const DarkListBox = Template.bind({});
DarkListBox.args = {
    value: '1111',
    disabled: false,
    label: 'label',
    items: [
        { value: '1111', disabled: false, content: '1111' },
        { value: '2222', disabled: false, content: '2222' },
        { value: '3333', disabled: false, content: '3333' },
    ],
    onChange: (value: string) => {},
    defaultValue: 'укажите',
};
DarkListBox.decorators = [ThemeDecorator(Theme.DARK)];
