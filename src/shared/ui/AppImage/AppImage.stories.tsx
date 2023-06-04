import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backGroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const AppImageLight = Template.bind({});
AppImageLight.args = {};

export const AppImageDark = Template.bind({});
AppImageDark.args = {};
AppImageDark.decorators = [ThemeDecorator(Theme.DARK)];
