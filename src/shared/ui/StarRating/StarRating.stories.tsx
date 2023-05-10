import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const LightStarRatingNotSelected = Template.bind({});
LightStarRatingNotSelected.args = { selectedStars: 0, size: 30 };

export const OrangeStarRatingNotSelected = Template.bind({});
OrangeStarRatingNotSelected.args = { selectedStars: 0, size: 30 };
OrangeStarRatingNotSelected.decorators = [ThemeDecorator(Theme.ORANGE)];

export const DarkStarRatingNotSelected = Template.bind({});
DarkStarRatingNotSelected.args = { selectedStars: 0, size: 30 };
DarkStarRatingNotSelected.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightStarRatingSelected = Template.bind({});
LightStarRatingSelected.args = { selectedStars: 3, size: 30 };

export const OrangeStarRatingSelected = Template.bind({});
OrangeStarRatingSelected.args = { selectedStars: 3, size: 30 };
OrangeStarRatingSelected.decorators = [ThemeDecorator(Theme.ORANGE)];

export const DarkStarRatingSelected = Template.bind({});
DarkStarRatingSelected.args = { selectedStars: 3, size: 30 };
DarkStarRatingSelected.decorators = [ThemeDecorator(Theme.ORANGE)];

export const DarkStarRating5 = Template.bind({});
DarkStarRating5.args = { selectedStars: 5, size: 30 };
DarkStarRating5.decorators = [ThemeDecorator(Theme.DARK)];
