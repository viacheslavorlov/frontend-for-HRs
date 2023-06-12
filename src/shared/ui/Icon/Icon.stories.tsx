import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Icon } from './Icon';
import TestIcon from '../../assets/copie.svg';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const LightIcon = Template.bind({});
LightIcon.args = { Svg: TestIcon };

export const DarkIcon = Template.bind({});
DarkIcon.args = { Svg: TestIcon };
DarkIcon.decorators = [ThemeDecorator(Theme.DARK)];
