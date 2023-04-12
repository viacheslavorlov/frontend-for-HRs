import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Flex } from './Flex';

export default {
    title: 'shared/FLex',
    component: Flex,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>),
};

export const RowBetween = Template.bind({});
RowBetween.args = {
    justify: 'between',
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>),
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    gap: '16',
    align: 'end',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </>),
};
ColumnGap32.decorators = [ThemeDecorator(Theme.DARK)];
