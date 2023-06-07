import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme/themeConst';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Text, TextSize, TextVariant } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLight = Template.bind({});
TextLight.args = {
    title: 'Titlу title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium autem consequuntur'
        + 'dignissimos dolor enim illum non porro? Asperiores beatae deleniti enim et ipsam laudantium nobis, '
        + 'non quam repellat!',
};

export const TextDark = Template.bind({});
TextDark.args = {
    title: 'Titlу title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium autem consequuntur'
        + 'dignissimos dolor enim illum non porro? Asperiores beatae deleniti enim et ipsam laudantium nobis, '
        + 'non quam repellat!',
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedText = Template.bind({});
RedText.args = {
    title: 'Titlу title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium autem consequuntur'
        + 'dignissimos dolor enim illum non porro? Asperiores beatae deleniti enim et ipsam laudantium nobis, '
        + 'non quam repellat!',
    variant: TextVariant.PRIMARY,
};

export const RedTextDark = Template.bind({});
RedTextDark.args = {
    title: 'Titlу title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium autem consequuntur'
        + 'dignissimos dolor enim illum non porro? Asperiores beatae deleniti enim et ipsam laudantium nobis, '
        + 'non quam repellat!',
    variant: TextVariant.ERROR,
};
RedTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextM = Template.bind({});
RedText.args = {
    size: TextSize.M,
    title: 'Titlу title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium autem consequuntur'
        + 'dignissimos dolor enim illum non porro? Asperiores beatae deleniti enim et ipsam laudantium nobis, '
        + 'non quam repellat!',
    variant: TextVariant.PRIMARY,
};

export const TextDarkL = Template.bind({});
RedTextDark.args = {
    size: TextSize.L,
    title: 'Titlу title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusantium autem consequuntur'
        + 'dignissimos dolor enim illum non porro? Asperiores beatae deleniti enim et ipsam laudantium nobis, '
        + 'non quam repellat!',
    variant: TextVariant.PRIMARY,
};
RedTextDark.decorators = [ThemeDecorator(Theme.DARK)];
