import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
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

export const LightRating4 = Template.bind({});
LightRating4.args = { rate: 4 };

export const DarkRating = Template.bind({});
DarkRating.args = {};
DarkRating.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRating3 = Template.bind({});
DarkRating3.args = { rate: 3 };
DarkRating3.decorators = [ThemeDecorator(Theme.DARK)];
