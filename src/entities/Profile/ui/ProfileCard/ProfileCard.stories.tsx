import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { ProfileCard } from 'entities/Profile';

export default {
    title: 'widgets/ProfileCard',
    component: ProfileCard,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const LightProfileCard = Template.bind({});
LightProfileCard.args = {};
LightProfileCard.decorators = [StoreDecorator(
    {
        profile: {
            data: {
                first: 'John',
                last: 'Doe',
                age: 42,
            },
        },
    },
)];

export const DarkProfileCard = Template.bind({});
DarkProfileCard.args = {};
DarkProfileCard.decorators = [StoreDecorator(
    {
        profile: {
            data: {
                first: 'John',
                last: 'Doe',
                age: 42,
            },
        },
    },
), ThemeDecorator(Theme.DARK)];