import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/TemeProvider';
import { ThemeDecorator } from 'shared/config/themeDecorator/themeDecorator';
import { StoreDecorator } from 'shared/config/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'shared/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const LightEditableProfileCard = Template.bind({});
LightEditableProfileCard.args = { id: '1' };
LightEditableProfileCard.decorators = [StoreDecorator({})];

export const DarkEditableProfileCard = Template.bind({});
DarkEditableProfileCard.args = { id: '2' };
DarkEditableProfileCard.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
