import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardLight = Template.bind({});
CardLight.args = {
    children: <Text title="test" text="test, test" />,
};
CardLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const CardDark = Template.bind({});
CardDark.args = {
    children: <Text title="test" text="test, test" />,
};
CardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CardOrange = Template.bind({});
CardOrange.args = {
    children: <Text title="test" text="test, test" />,
};
CardOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
