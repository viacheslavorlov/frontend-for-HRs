import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Popup } from './Popup';

export default {
    title: 'shared/Popup',
    component: Popup,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const LightPopup = Template.bind({});
LightPopup.args = {};

export const DarkPopup = Template.bind({});
DarkPopup.args = {};
DarkPopup.decorators = [ThemeDecorator(Theme.DARK)];
