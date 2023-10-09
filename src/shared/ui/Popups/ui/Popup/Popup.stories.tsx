import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../Button';
import { Popup } from './Popup';

export default {
    title: 'shared/Popup',
    component: Popup,
    argTypes: {
        background: { control: 'background' },
    },
    args: {
        trigger: <Button>Open PopUp</Button>,
        direction: 'bottomRight',
        children: [<div key={'1'}>1</div>, <div key={'2'}>2</div>, <div key={'3'}>3</div>],
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args}>{args.children}</Popup>;

export const LightPopup = Template.bind({});
LightPopup.args = {};

export const DarkPopup = Template.bind({});
DarkPopup.args = {
    trigger: <Button>Open PopUp</Button>,
    direction: 'bottomRight',
    children: [<div key={'1'}>1</div>, <div key={'2'}>2</div>, <div key={'3'}>3</div>],
};
DarkPopup.decorators = [ThemeDecorator(Theme.DARK)];
