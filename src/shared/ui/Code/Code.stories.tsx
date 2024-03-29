import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Code>;

const children = `<!doctype html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        </head>
        <body>
        
        </body>
    </html>`;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args}>{children}</Code>;

export const LightCode = Template.bind({});
LightCode.args = { children };

export const DarkCode = Template.bind({});
DarkCode.args = { children };
DarkCode.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeCode = Template.bind({});
OrangeCode.args = { children };
OrangeCode.decorators = [ThemeDecorator(Theme.ORANGE)];
