import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
        ThemeDecorator(Theme.LIGHT),
    ],
} as ComponentMeta<typeof ListBox>;

// eslint-disable-next-line react/jsx-props-no-spreading
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
    direction: 'bottomLeft',
    onChange: (value: string) => {
        console.log(value);
    },
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
    onChange: (value: string) => {
        console.log(value);
    },
    defaultValue: 'укажите',
};
DarkListBox.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkListBoxBottomLeft = Template.bind({});
DarkListBoxBottomLeft.args = {
    value: '1111',
    disabled: false,
    label: 'label',
    items: [
        { value: '1111', disabled: false, content: '1111' },
        { value: '2222', disabled: false, content: '2222' },
        { value: '3333', disabled: false, content: '3333' },
    ],
    direction: 'bottomLeft',
    onChange: (value: string) => {
        console.log(value);
    },
    defaultValue: 'укажите',
};
DarkListBoxBottomLeft.decorators = [ThemeDecorator(Theme.DARK)];
