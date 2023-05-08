import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/TemeProvider';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { ForbiddenPage } from './ForbiddenPage';

export default {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        background: { control: 'background' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const LightForbiddenPage = Template.bind({});
LightForbiddenPage.args = {};

export const DarkForbiddenPage = Template.bind({});
DarkForbiddenPage.args = {};
DarkForbiddenPage.decorators = [ThemeDecorator(Theme.DARK)];
