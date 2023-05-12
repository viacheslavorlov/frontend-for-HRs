import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                id: '1',
                username: 'User',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxN-HcCY8vkC5AR8G8QJN6HFOklqleEMQc8KhBtZtnQ&s',
                last: 'User',
                first: 'Userella',
                currency: Currency.EUR,
                country: Country.Russia,
                city: 'Moscow',
                age: 99,
            },
        },
        user: {
            authData: {
                id: '1',
            },
        },
    })],
} as ComponentMeta<typeof EditableProfileCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const LightEditableProfileCard = Template.bind({});
LightEditableProfileCard.args = { id: '1' };

export const LightEditableProfileCardEditable = Template.bind({});
LightEditableProfileCardEditable.args = { id: '1' };
LightEditableProfileCardEditable.decorators = [StoreDecorator({
    profile: {
        data: {
            id: '1',
        },
        form: {
            id: '1',
            username: 'User',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxN-HcCY8vkC5AR8G8QJN6HFOklqleEMQc8KhBtZtnQ&s',
            last: 'User',
            first: 'Userella',
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Moscow',
            age: 99,
        },
    },
    user: {
        authData: {
            id: '1',
        },
    },
})];

export const DarkEditableProfileCard = Template.bind({});
DarkEditableProfileCard.args = { id: '1' };
DarkEditableProfileCard.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkEditableProfileCardEditable = Template.bind({});
DarkEditableProfileCardEditable.args = { id: '1' };
DarkEditableProfileCardEditable.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            data: {
                id: '1',
            },
            form: {
                id: '1',
                username: 'User',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxN-HcCY8vkC5AR8G8QJN6HFOklqleEMQc8KhBtZtnQ&s',
                last: 'User',
                first: 'Userella',
                currency: Currency.EUR,
                country: Country.Russia,
                city: 'Moscow',
                age: 99,
            },
        },
        user: {
            authData: {
                id: '1',
            },
        },
    })];
