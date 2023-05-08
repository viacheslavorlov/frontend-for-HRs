import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/app/providers/TemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLASSIC,
};
Classic.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];

export const ClassicLight = Template.bind({});
ClassicLight.args = {
    children: 'Button',
    theme: ButtonTheme.CLASSIC,
};
ClassicLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
    disabled: true,
};
