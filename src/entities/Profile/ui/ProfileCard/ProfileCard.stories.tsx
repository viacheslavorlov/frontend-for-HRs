import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const LightProfileCard = Template.bind({});
LightProfileCard.args = {
    data: {
        first: 'John',
        last: 'Doe',
        age: 42,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
        username: 'Username',
        city: 'Kuala Lumpur',
        currency: Currency.RUB,
        country: Country.Kazakhstan,
    },
};

export const DarkProfileCard = Template.bind({});
DarkProfileCard.args = {
    data: {
        first: 'John',
        last: 'Doe',
        age: 42,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFJ__HxmXSqCktfWMBg3XNM8n9vVkCr5tsQ&usqp=CAU',
        username: 'Username',
        city: 'Kuala Lumpur',
        currency: Currency.RUB,
        country: Country.Kazakhstan,
    },
};
DarkProfileCard.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingtProfileCard = Template.bind({});
LoadingtProfileCard.args = {
    isLoading: true,
};

export const ErrorProfileCard = Template.bind({});
ErrorProfileCard.args = {
    error: 'error',
};
