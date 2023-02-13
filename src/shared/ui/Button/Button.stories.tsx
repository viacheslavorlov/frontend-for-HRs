import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Classic = Template.bind({});
Classic.args = {
    children: 'Button',
    theme: ThemeButton.CLASSIC,
};
Classic.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];

export const ClassicLight = Template.bind({});
ClassicLight.args = {
    children: 'Button',
    theme: ThemeButton.CLASSIC,
};
ClassicLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Button',
    theme: ThemeButton.CLEAR,
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];
