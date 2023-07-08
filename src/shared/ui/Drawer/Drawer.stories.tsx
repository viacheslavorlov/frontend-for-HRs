import { SuspenseDecorator } from '@/shared/config/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        background: { control: 'background' },
    },

    decorators: [SuspenseDecorator],
} as ComponentMeta<typeof Drawer>;

const content = [
    '1 Notification',
    '2 Notification',
    '3 Notification',
    '1 Notification',
    '2 Notification',
    '3 Notification',
].map((item, i) => <div key={i}>{item}</div>);

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const LightDrawer = Template.bind({});
LightDrawer.args = { children: content, isOpen: true };
LightDrawer.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DarkDrawer = Template.bind({});
DarkDrawer.args = { children: content, isOpen: true };
DarkDrawer.decorators = [ThemeDecorator(Theme.DARK)];
