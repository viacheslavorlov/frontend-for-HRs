import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as Meta<typeof Dropdown>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const LightDropdown = Template.bind({});
LightDropdown.args = {
    direction: 'bottomRight',
    trigger: <Button>Название инструмента</Button>,
    items: [
        { content: 'первый пункт', disabled: false },
        { content: 'второй пункт', disabled: false },
        { content: 'отключенный пункт', disabled: true },
    ],
};

export const DarkDropdown = Template.bind({});
DarkDropdown.args = {
    direction: 'bottomRight',
    trigger: <Button>Название инструмента</Button>,
    items: [
        { content: 'первый пункт', disabled: false },
        { content: 'второй пункт', disabled: false },
        { content: 'отключенный пункт', disabled: true },
    ],
};
DarkDropdown.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeDropdown = Template.bind({});
OrangeDropdown.args = {
    direction: 'bottomRight',
    trigger: <Button>Название инструмента</Button>,
    items: [
        { content: 'первый пункт', disabled: false },
        { content: 'второй пункт', disabled: false },
        { content: 'отключенный пункт', disabled: true },
    ],
};
OrangeDropdown.decorators = [ThemeDecorator(Theme.ORANGE)];
