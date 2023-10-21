import { RouterDecorator } from '@/shared/config/routerDecorator/routerDecorator';
import { StoreDecorator } from '@/shared/config/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/themeDecorator/themeDecorator';
import { Theme } from '@/shared/const/theme/themeConst';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewNavbar } from './NewNavbar';

export default {
    title: 'widgets/NewNavbar',
    component: NewNavbar,
    argTypes: {
        background: { control: 'background' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
} as ComponentMeta<typeof NewNavbar>;

const Template: ComponentStory<typeof NewNavbar> = (args) => <NewNavbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'asdf' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })];
