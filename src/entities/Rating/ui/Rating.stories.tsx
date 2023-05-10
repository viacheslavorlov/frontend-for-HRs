import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Rating } from './Rating';

export default {
    title: 'shared/Rating',
    component: Rating,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const LightRating = Template.bind({});
LightRating.args = {};

export const DarkRating = Template.bind({});
DarkRating.args = {};
DarkRating.decorators = [ThemeDecorator(Theme.DARK)];
