import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/TemeProvider';
import { Icon } from './Icon';
import TestIcon from '../../assets/copie.svg';

export default {
    title: 'widgets/Code',
    component: Icon,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const LightCode = Template.bind({});
LightCode.args = { Svg: TestIcon };

export const DarkCode = Template.bind({});
DarkCode.args = { Svg: TestIcon };
DarkCode.decorators = [ThemeDecorator(Theme.DARK)];
